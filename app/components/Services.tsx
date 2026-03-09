"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../theme/services.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "IT Infrastructure & IT Consultations",
        description:
            "End-to-end IT infrastructure design, deployment, and consulting to build resilient, scalable systems tailored to your business.",
    },
    {
        title: "Cloud Solutions",
        description:
            "Migrate, manage, and optimize your cloud environments for performance, cost-efficiency, and security across all major platforms.",
    },
    {
        title: "AWS Consulting",
        description:
            "Expert AWS architecture, migration strategies, and managed services to maximize your Amazon Web Services investment.",
    },
    {
        title: "AI & Automations",
        description:
            "Leverage artificial intelligence and workflow automation to streamline operations, reduce costs, and unlock new capabilities.",
    },
    {
        title: "Web Applications",
        description:
            "Custom web application development using modern frameworks, delivering fast, responsive, and scalable digital experiences.",
    },
    {
        title: "Mobile Applications",
        description:
            "Native and cross-platform mobile apps designed for performance, usability, and seamless integration with your ecosystem.",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);
    const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
    const descRefs = useRef<(HTMLDivElement | null)[]>([]);
    const activeRef = useRef<number>(0);

    const setEntryRef = useCallback((el: HTMLDivElement | null, i: number) => {
        entryRefs.current[i] = el;
    }, []);
    const setDescRef = useCallback((el: HTMLDivElement | null, i: number) => {
        descRefs.current[i] = el;
    }, []);

    useEffect(() => {
        // Initial state for descriptions: GSAP handles this on mount
        descRefs.current.forEach((desc, i) => {
            if (!desc) return;
            gsap.set(desc, { height: i === 0 ? "auto" : 0, opacity: i === 0 ? 1 : 0 });
        });
        entryRefs.current.forEach((entry, i) => {
            if (i === 0) entry?.setAttribute("data-active", "true");
            else entry?.removeAttribute("data-active");
        });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = services.length;
            const strip = stripRef.current;
            if (!strip || !triggerRef.current) return;

            // Wait a bit for layout to settle before measurement
            setTimeout(() => {
                const firstCard = strip.children[0] as HTMLElement;
                const secondCard = strip.children[1] as HTMLElement;
                if (!firstCard) return;

                const cardH = firstCard.getBoundingClientRect().height;
                const gap = secondCard
                    ? secondCard.getBoundingClientRect().top - firstCard.getBoundingClientRect().bottom
                    : 16;
                const totalShift = (panels - 1) * (cardH + gap);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: `+=${panels * 100}%`,
                        pin: sectionRef.current,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(strip, {
                    y: -totalShift,
                    duration: panels,
                    ease: "none",
                }, 0);

                // Left side animations
                for (let i = 0; i < panels - 1; i++) {
                    const transitionTime = ((i + 0.85) / panels) * panels;

                    tl.to(descRefs.current[i], {
                        height: 0,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power1.in",
                        onComplete: () => {
                            entryRefs.current[i]?.removeAttribute("data-active");
                        },
                    }, transitionTime);

                    tl.to(descRefs.current[i + 1], {
                        height: "auto",
                        opacity: 1,
                        duration: 0.4,
                        ease: "power1.out",
                        onStart: () => {
                            entryRefs.current[i + 1]?.setAttribute("data-active", "true");
                        },
                    }, transitionTime + 0.15);
                }

                ScrollTrigger.refresh();
            }, 100);
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="services" ref={triggerRef} className={styles.triggerWrap}>
            <div ref={sectionRef} className={styles.services}>
                <div className={styles.grid}>
                    {/* Left: service list with inline descriptions */}
                    <div className={styles.leftPanel}>
                        <h2 className={styles.heading}>Services</h2>
                        <div className={styles.serviceList}>
                            {services.map((service, i) => (
                                <div
                                    key={service.title}
                                    ref={(el) => setEntryRef(el, i)}
                                    className={styles.serviceEntry}
                                >
                                    <div className={styles.serviceTitle}>
                                        {service.title}
                                    </div>
                                    <div
                                        ref={(el) => setDescRef(el, i)}
                                        className={styles.descWrap}
                                    >
                                        <p className={styles.serviceDesc}>
                                            {service.description}
                                        </p>
                                        <a href="#contact" className={styles.learnMore}>
                                            Learn more →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: bottom-right vertical card strip */}
                    <div className={styles.rightPanel}>
                        <div className={styles.cardStack}>
                            <div ref={stripRef} className={styles.cardStrip}>
                                {services.map((_, i) => (
                                    <div key={`card-${i}`} className={styles.slideCard}>
                                        <span className={styles.cardNumber}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
