"use client";

import { useEffect, useRef } from "react";
import styles from "../theme/heroBackground.module.css";

/**
 * "Live Network" hero background.
 *
 * A hand-rolled HTML5 Canvas particle network (no dependency — a canvas loop is
 * far lighter than pulling in tsparticles for this): glowing nodes drifting in
 * zero-gravity, distance-based links that pulse in and out, cursor repulsion +
 * "grab" filaments, and the occasional data packet travelling a random path.
 *
 * Performance guards: DPR capped at 2, node count scaled down on small screens,
 * work throttled to ~60fps, the loop paused via IntersectionObserver when the
 * hero scrolls away and via visibilitychange when the tab is hidden.
 * `prefers-reduced-motion` freezes the network to a single static frame with no
 * drift, no pulses and no pointer reaction.
 */

type RGB = { r: number; g: number; b: number };

const PALETTE: { color: RGB; weight: number }[] = [
    { color: { r: 255, g: 255, b: 255 }, weight: 0.44 }, // white
    { color: { r: 125, g: 180, b: 255 }, weight: 0.34 }, // soft blue
    { color: { r: 163, g: 255, b: 92 }, weight: 0.22 }, // mint (button accent)
];
const MINT_INDEX = 2;

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    ci: number;
    phase: number;
};

type Pulse = {
    path: Particle[];
    start: number;
    dur: number;
};

function createLiveNetwork(
    container: HTMLDivElement,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
): () => void {
    const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const interactive = !prefersReduced && !coarsePointer;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const TAU = Math.PI * 2;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let pulses: Pulse[] = [];
    let rafId = 0;
    let running = false;
    let onScreen = true;
    let nextPulseAt = 0;
    let lastFrame = 0;
    const mouse = { x: 0, y: 0, active: false };

    // --- pre-rendered radial glow sprites (blitted each frame, cheap) ---
    const glowSprites: HTMLCanvasElement[] = PALETTE.map(({ color }) => {
        const s = 64;
        const c = document.createElement("canvas");
        c.width = s;
        c.height = s;
        const g = c.getContext("2d");
        if (g) {
            const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
            grad.addColorStop(0, `rgba(${color.r},${color.g},${color.b},0.85)`);
            grad.addColorStop(0.3, `rgba(${color.r},${color.g},${color.b},0.28)`);
            grad.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);
            g.fillStyle = grad;
            g.fillRect(0, 0, s, s);
        }
        return c;
    });

    // Density scales with the container's area so the network fills wide /
    // ultra-wide screens instead of thinning out once the canvas is full-bleed.
    const nodeCountFor = (w: number) => {
        if (w < 600) return 20;
        const density = (w * height) / 17000;
        return Math.round(Math.min(130, Math.max(44, density)));
    };
    const linkDist = () => {
        if (width < 600) return 132;
        if (width < 1700) return 178;
        return 208;
    };

    const pickColorIndex = () => {
        const r = Math.random();
        let acc = 0;
        for (let i = 0; i < PALETTE.length; i++) {
            acc += PALETTE[i].weight;
            if (r <= acc) return i;
        }
        return 0;
    };

    function buildParticles() {
        const count = nodeCountFor(width);
        pulses = [];
        particles = Array.from({ length: count }, () => {
            const angle = Math.random() * TAU;
            const speed = prefersReduced ? 0 : 0.08 + Math.random() * 0.16;
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: 1.4 + Math.random() * 1.8,
                ci: pickColorIndex(),
                phase: Math.random() * TAU,
            };
        });
    }

    function resize() {
        const rect = container.getBoundingClientRect();
        const prevW = width;
        const prevH = height;
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const target = nodeCountFor(width);
        if (!particles.length || Math.abs(particles.length - target) > 6) {
            buildParticles();
        } else if (prevW && prevH) {
            const sx = width / prevW;
            const sy = height / prevH;
            for (const p of particles) {
                p.x *= sx;
                p.y *= sy;
            }
        }

        if (prefersReduced) renderStaticFrame();
    }

    function step() {
        for (const p of particles) {
            // gentle zero-gravity wander
            p.vx += (Math.random() - 0.5) * 0.02;
            p.vy += (Math.random() - 0.5) * 0.02;

            if (interactive && mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const d2 = dx * dx + dy * dy;
                const R = 150;
                if (d2 < R * R) {
                    const d = Math.sqrt(d2) || 1;
                    const f = (1 - d / R) * 0.55;
                    p.vx += (dx / d) * f;
                    p.vy += (dy / d) * f;
                }
            }

            p.vx *= 0.96;
            p.vy *= 0.96;

            const sp = Math.hypot(p.vx, p.vy);
            const max = 0.9;
            if (sp > max) {
                p.vx = (p.vx / sp) * max;
                p.vy = (p.vy / sp) * max;
            }

            p.x += p.vx;
            p.y += p.vy;

            // soft bounce keeps links continuous (no wrap pops)
            if (p.x < 0) {
                p.x = 0;
                p.vx = Math.abs(p.vx);
            } else if (p.x > width) {
                p.x = width;
                p.vx = -Math.abs(p.vx);
            }
            if (p.y < 0) {
                p.y = 0;
                p.vy = Math.abs(p.vy);
            } else if (p.y > height) {
                p.y = height;
                p.vy = -Math.abs(p.vy);
            }
        }
    }

    function drawLinks(time: number) {
        const maxD = linkDist();
        const maxD2 = maxD * maxD;
        ctx.lineWidth = 0.7;
        // additive blend so an overlapping web of faint links still reads as one
        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const d2 = dx * dx + dy * dy;
                if (d2 > maxD2) continue;
                const proximity = 1 - Math.sqrt(d2) / maxD;
                const flicker =
                    0.62 + 0.38 * Math.sin(time * 0.0016 + (i * 12.9 + j * 4.7));
                let alpha = proximity * 0.2 * flicker;
                let cr = 150;
                let cg = 180;
                let cb = 230;

                if (interactive && mouse.active) {
                    const mx = (a.x + b.x) / 2 - mouse.x;
                    const my = (a.y + b.y) / 2 - mouse.y;
                    const md = Math.hypot(mx, my);
                    if (md < 180) {
                        const boost = 1 - md / 180;
                        alpha += boost * 0.4;
                        cr = 163;
                        cg = 255;
                        cb = 92;
                    }
                }

                ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }

        // "grab" filaments from the cursor to nearby nodes
        if (interactive && mouse.active) {
            for (const p of particles) {
                const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                if (d > 180) continue;
                ctx.strokeStyle = `rgba(163,255,92,${(1 - d / 180) * 0.3})`;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            }
        }
        ctx.globalCompositeOperation = "source-over";
    }

    function drawParticles(time: number) {
        // glow halos: additive light points against the black hero
        ctx.globalCompositeOperation = "lighter";
        for (const p of particles) {
            const tw = 0.55 + 0.45 * Math.sin(time * 0.002 + p.phase);
            const halo = 8 + p.radius * 3.8 * (0.7 + tw * 0.5);
            ctx.globalAlpha = 0.4 + 0.55 * tw;
            ctx.drawImage(
                glowSprites[p.ci],
                p.x - halo,
                p.y - halo,
                halo * 2,
                halo * 2,
            );
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";

        for (const p of particles) {
            const { color } = PALETTE[p.ci];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, TAU);
            ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},0.95)`;
            ctx.fill();
        }
    }

    function drawPulses(time: number) {
        pulses = pulses.filter((p) => time - p.start < p.dur);
        for (const pulse of pulses) {
            const t = (time - pulse.start) / pulse.dur;
            const segCount = pulse.path.length - 1;
            const fseg = Math.min(segCount - 0.0001, t * segCount);
            const si = Math.floor(fseg);
            const local = fseg - si;
            const a = pulse.path[si];
            const b = pulse.path[si + 1];
            const x = a.x + (b.x - a.x) * local;
            const y = a.y + (b.y - a.y) * local;
            const fade = Math.sin(t * Math.PI);

            const segLen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
            const trail = 26;
            const bx = x - ((b.x - a.x) / segLen) * trail;
            const by = y - ((b.y - a.y) / segLen) * trail;
            const grad = ctx.createLinearGradient(bx, by, x, y);
            grad.addColorStop(0, "rgba(163,255,92,0)");
            grad.addColorStop(1, `rgba(163,255,92,${0.5 * fade})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(x, y);
            ctx.stroke();

            const halo = 5 + 16 * fade;
            ctx.globalCompositeOperation = "lighter";
            ctx.globalAlpha = fade;
            ctx.drawImage(
                glowSprites[MINT_INDEX],
                x - halo,
                y - halo,
                halo * 2,
                halo * 2,
            );
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "source-over";
            ctx.beginPath();
            ctx.arc(x, y, 2.2, 0, TAU);
            ctx.fillStyle = `rgba(240,255,225,${0.95 * fade})`;
            ctx.fill();
        }
    }

    function spawnPulse(time: number) {
        if (particles.length < 3) return;
        const maxD = linkDist();
        const start = particles[(Math.random() * particles.length) | 0];
        const path: Particle[] = [start];
        let current = start;
        const hops = 2 + ((Math.random() * 2) | 0);
        for (let h = 0; h < hops; h++) {
            const cands = particles.filter(
                (n) =>
                    !path.includes(n) &&
                    Math.hypot(n.x - current.x, n.y - current.y) < maxD,
            );
            if (!cands.length) break;
            current = cands[(Math.random() * cands.length) | 0];
            path.push(current);
        }
        if (path.length < 2) return;
        pulses.push({ path, start: time, dur: 430 * (path.length - 1) });
    }

    function renderStaticFrame() {
        ctx.clearRect(0, 0, width, height);
        drawLinks(0);
        drawParticles(1200);
    }

    function frame(time: number) {
        if (!running) return;
        rafId = requestAnimationFrame(frame);
        if (time - lastFrame < 1000 / 60) return;
        lastFrame = time;

        ctx.clearRect(0, 0, width, height);
        step();
        drawLinks(time);
        drawPulses(time);
        drawParticles(time);

        if (time >= nextPulseAt && pulses.length < 3) {
            spawnPulse(time);
            nextPulseAt = time + 1700 + Math.random() * 2600;
        }
    }

    function start() {
        if (running || prefersReduced || !onScreen || document.hidden) return;
        running = true;
        nextPulseAt = performance.now() + 1200;
        rafId = requestAnimationFrame(frame);
    }

    function stop() {
        running = false;
        cancelAnimationFrame(rafId);
    }

    // --- listeners ---
    const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouse.x = x;
        mouse.y = y;
        mouse.active = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
    };
    const onPointerOut = () => {
        mouse.active = false;
    };
    const onVisibility = () => {
        if (document.hidden) stop();
        else start();
    };

    let resizeRaf = 0;
    const onResize = () => {
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(resize);
    };

    resize();
    window.addEventListener("resize", onResize);

    if (prefersReduced) {
        renderStaticFrame();
        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(resizeRaf);
        };
    }

    const io = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                onScreen = entry.isIntersecting;
                if (onScreen) start();
                else stop();
            }
        },
        { threshold: 0 },
    );
    io.observe(container);

    document.addEventListener("visibilitychange", onVisibility);
    if (interactive) {
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerout", onPointerOut, { passive: true });
    }
    start();

    return () => {
        stop();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerout", onPointerOut);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(resizeRaf);
    };
}

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        return createLiveNetwork(container, canvas, ctx);
    }, []);

    return (
        <div ref={containerRef} className={styles.heroBg} aria-hidden="true">
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.veil} />
        </div>
    );
}
