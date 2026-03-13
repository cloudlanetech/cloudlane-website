"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../theme/services.module.css";

// Illustration imports
import InfraSVG from "./illustrations/InfraSVG";
import CloudSVG from "./illustrations/CloudSVG";
import AWSSVG from "./illustrations/AWSSVG";
import AISVG from "./illustrations/AISVG";
import WebSVG from "./illustrations/WebSVG";
import MobileSVG from "./illustrations/MobileSVG";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "IT Infrastructure & IT Consultations",
        description:
            "End-to-end IT infrastructure design, deployment, and consulting to build resilient, scalable systems tailored to your business.",
        // icon: "🏗️",
        illustration: <InfraSVG />,
        tagline: "Build a resilient digital backbone with expert guidance.",
    },
    {
        title: "Cloud Solutions",
        description:
            "Migrate, manage, and optimize your cloud environments for performance, cost-efficiency, and security across all major platforms.",
        // icon: "☁️",
        illustration: <CloudSVG />,
        tagline: "Isometric infrastructure · Migrate · Scale · Optimize",
    },
    {
        title: "AWS Consulting",
        description:
            "Expert AWS architecture, migration strategies, and managed services to maximize your Amazon Web Services investment.",
        // icon: "⚡",
        illustration: <AWSSVG />,
        tagline: "Maximize your AWS investment with battle-tested strategies.",
    },
    {
        title: "AI & Automations",
        description:
            "Leverage artificial intelligence and workflow automation to streamline operations, reduce costs, and unlock new capabilities.",
        // icon: "🤖",
        illustration: <AISVG />,
        tagline: "Intelligent automation that drives real business outcomes.",
    },
    {
        title: "Web Applications",
        description:
            "Custom web application development using modern frameworks, delivering fast, responsive, and scalable digital experiences.",
        // icon: "🌐",
        illustration: <WebSVG />,
        tagline: "Modern, performant web experiences built to convert.",
    },
    {
        title: "Mobile Applications",
        description:
            "Native and cross-platform mobile apps designed for performance, usability, and seamless integration with your ecosystem.",
        // icon: "📱",
        illustration: <MobileSVG />,
        tagline: "Cross-platform apps engineered for engagement.",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
    const descRefs = useRef<(HTMLDivElement | null)[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const activeRef = useRef<number>(0);

    const setEntryRef = useCallback((el: HTMLDivElement | null, i: number) => {
        entryRefs.current[i] = el;
    }, []);
    const setDescRef = useCallback((el: HTMLDivElement | null, i: number) => {
        descRefs.current[i] = el;
    }, []);
    const setCardRef = useCallback((el: HTMLDivElement | null, i: number) => {
        cardRefs.current[i] = el;
    }, []);

    // Set initial description state
    useEffect(() => {
        descRefs.current.forEach((desc, i) => {
            if (!desc) return;
            gsap.set(desc, { height: i === 0 ? "auto" : 0, opacity: i === 0 ? 1 : 0 });
        });
        entryRefs.current.forEach((entry, i) => {
            if (i === 0) entry?.setAttribute("data-active", "true");
            else entry?.removeAttribute("data-active");
        });
    }, []);

    // ScrollTrigger per card — detect which card is in view
    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        const triggers: ScrollTrigger[] = [];

        cards.forEach((card, i) => {
            const st = ScrollTrigger.create({
                trigger: card,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => activateService(i),
                onEnterBack: () => activateService(i),
            });
            triggers.push(st);
        });

        // Ensure GSAP knows about the card positions after initial render
        ScrollTrigger.refresh();

        return () => {
            triggers.forEach((st) => st.kill());
        };
    }, []);

    // Refresh triggers after a short delay to account for dynamic content/images
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    function activateService(index: number) {
        const prev = activeRef.current;
        if (prev === index) return;

        // Collapse previous description
        const prevDesc = descRefs.current[prev];
        if (prevDesc) {
            gsap.to(prevDesc, { height: 0, opacity: 0, duration: 0.15, ease: "none" });
        }
        entryRefs.current[prev]?.removeAttribute("data-active");

        // Expand new description
        const nextDesc = descRefs.current[index];
        if (nextDesc) {
            gsap.to(nextDesc, { height: "auto", opacity: 1, duration: 0.15, ease: "none" });
        }
        entryRefs.current[index]?.setAttribute("data-active", "true");

        activeRef.current = index;
    }

    return (
        <section id="services" ref={sectionRef} className={styles.servicesSection}>
            <div className={styles.container}>
                {/* Left: sticky service list with inline descriptions */}
                <div className={styles.servicesLeft}>
                    <h2 className={styles.heading}>Services</h2>

                    <ul className={styles.servicesList}>
                        {services.map((service, i) => (
                            <div
                                key={service.title}
                                ref={(el) => setEntryRef(el, i)}
                                className={styles.serviceEntry}
                                data-active={i === 0 ? "true" : undefined}
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
                                    {/* <a href="#contact" className={styles.learnMore}>
                                        Learn more →
                                    </a> */}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                {/* Right: scrolling card strip, right-edge aligned */}
                <div className={styles.servicesRight}>
                    {services.map((service, i) => (
                        <div
                            key={`card-${i}`}
                            ref={(el) => setCardRef(el, i)}
                            className={styles.serviceCard}
                        >
                            <div className={styles.cardVisual}>
                                {service.illustration}
                            </div>
                            <div className={styles.cardPattern} />
                            <div className={styles.cardContent}>
                                {/* <div className={styles.cardIcon}>{service.icon}</div> */}
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardTagline}>{service.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
