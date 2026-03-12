"use client";

import React from "react";
import styles from "../theme/socialProof.module.css";

// Import Illustrations
import HealthSVG from "./illustrations/social/HealthSVG";
import FinTechSVG from "./illustrations/social/FinTechSVG";
import EdTechSVG from "./illustrations/social/EdTechSVG";
import AgriTechSVG from "./illustrations/social/AgriTechSVG";
import FoodTechSVG from "./illustrations/social/FoodTechSVG";
import EcomSVG from "./illustrations/social/EcomSVG";
import LogisticsSVG from "./illustrations/social/LogisticsSVG";
import HRSVG from "./illustrations/social/HRSVG";
import PropTechSVG from "./illustrations/social/PropTechSVG";
import CyberSVG from "./illustrations/social/CyberSVG";
import SocialGraphSVG from "./illustrations/SocialGraphSVG";

interface SocialCardProps {
    art: React.ReactNode;
    eyebrow: string;
    title: string;
    sub: string;
    chips: string[];
    isLandscape?: boolean;
    className?: string;
}

function SocialCard({ art, eyebrow, title, sub, chips, isLandscape, className = "" }: SocialCardProps) {
    return (
        <div className={`${styles.card} ${isLandscape ? styles.row2Card : styles.row1Card} ${className}`}>
            <div className={styles.art}>
                {art}
            </div>
            <div className={styles.info}>
                <span className={styles.eyebrow}>{eyebrow}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.sub}>{sub}</p>
                <div className={styles.chips}>
                    {chips.map((chip, idx) => (
                        <span key={idx} className={styles.chip}>{chip}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function SocialProof() {
    const row1Cards = [
        {
            art: <HealthSVG />,
            eyebrow: "Monitoring",
            title: "HealthTech",
            sub: "AI-driven patient monitoring for modern healthcare systems.",
            chips: ["Smart Health", "Vitals"]
        },
        {
            art: <FinTechSVG />,
            eyebrow: "Payments",
            title: "FinTech",
            sub: "Secure, real-time financial infrastructure for global scale.",
            chips: ["Cards", "Payments"]
        },
        {
            art: <EdTechSVG />,
            eyebrow: "Learning",
            title: "EdTech",
            sub: "Adaptive learning platforms for the next generation.",
            chips: ["Online", "Tutor"]
        },
        {
            art: <AgriTechSVG />,
            eyebrow: "Farming",
            title: "AgriTech",
            sub: "Smart agriculture solutions through IoT and data science.",
            chips: ["IoT", "Fields"]
        },
        {
            art: <FoodTechSVG />,
            eyebrow: "Delivery",
            title: "FoodTech",
            sub: "Optimized logistics and delivery systems for restaurants.",
            chips: ["Delivery", "Rest"]
        }
    ];

    const row2Cards = [
        {
            art: <EcomSVG />,
            eyebrow: "Retail",
            title: "E-Commerce",
            sub: "Predictive shopping experiences with AI-powered recommendations.",
            chips: ["Cart", "Upsell"],
            isLandscape: true,
            className: styles.creamBackground
        },
        {
            art: <LogisticsSVG />,
            eyebrow: "Shipping",
            title: "Logistics",
            sub: "Dynamic route optimization and real-time fleet management.",
            chips: ["Track", "Fleet"],
            isLandscape: true
        },
        {
            art: <HRSVG />,
            eyebrow: "Talent",
            title: "HR SaaS",
            sub: "Automated hiring workflows and talent discovery engines.",
            chips: ["Recruit", "AI"],
            isLandscape: true,
            className: styles.orangeBackground
        },
        {
            art: <PropTechSVG />,
            eyebrow: "Real Estate",
            title: "PropTech",
            sub: "Virtual property tours and automated real-estate valuations.",
            chips: ["Homes", "Tours"],
            isLandscape: true
        },
        {
            art: <CyberSVG />,
            eyebrow: "Security",
            title: "Cybersecurity",
            sub: "Real-time threat detection and zero-day protection layers.",
            chips: ["Shield", "Zero-day"],
            isLandscape: true
        }
    ];

    // Double lists for marquee
    const row1Doubled = [...row1Cards, ...row1Cards];
    const row2Doubled = [...row2Cards, ...row2Cards];

    return (
        <section id="social-proof" className={styles.socialProofSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h2 className={styles.heading}>
                            Simplifying <br />
                            Technology for <br />
                            <span className={styles.accentText}>Modern <br />Business</span>
                        </h2>
                    </div>
                    <div className={styles.headerGraph}>
                        <div className={styles.imagePlaceholder}>
                            <div className={styles.placeholderVisual}>
                                <SocialGraphSVG />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeRow}>
                    {row1Doubled.map((card, i) => (
                        <SocialCard key={`r1-${i}`} {...card} isLandscape={true} />
                    ))}
                </div>
                <div className={styles.marqueeRowReverse}>
                    {row2Doubled.map((card, i) => (
                        <SocialCard key={`r2-${i}`} {...card} isLandscape={true} />
                    ))}
                </div>
            </div>
        </section>
    );
}
