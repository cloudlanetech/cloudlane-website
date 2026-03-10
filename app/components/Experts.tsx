"use client";

import styles from "../theme/experts.module.css";

const coreValues = [
    {
        title: "Innovation",
        description: "We constantly push boundaries to find better solutions.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.8.9 1.3 1.5 1.5 2.4" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
            </svg>
        )
    },
    {
        title: "Transparency",
        description: "Open communication and clear processes are our standard.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        )
    },
    {
        title: "Quality",
        description: "Excellence is not an act, but a habit in everything we do.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
        )
    },
    {
        title: "Client Success",
        description: "Your growth is the only metric that truly matters to us.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
];

function ValueCard({ value }: { value: typeof coreValues[0] }) {
    return (
        <div className={styles.expertCard}>
            <div className={styles.imageWrapper}>
                <div className={styles.valueIcon}>{value.icon}</div>
            </div>
            <div className={styles.valueContent}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
            </div>
        </div>
    );
}

export default function CoreValues() {
    return (
        <section className={styles.expertsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h2 className={styles.heading}>Core Values</h2>
                        <p className={styles.subheading}>
                            The principles that guide every decision, line of code, and client interaction.
                        </p>
                    </div>
                    <div className={styles.actions}>
                        <a href="#careers" className={styles.joinLink}>Join our team →</a>
                    </div>
                </div>

                <div className={styles.expertsGrid}>
                    {coreValues.map((value, i) => (
                        <ValueCard key={i} value={value} />
                    ))}
                </div>

                {/* Tech Stack Section (from SS) */}
                <div className={styles.techStackSection}>
                    <h4 className={styles.techStackHeading}>Powered by Modern Technologies</h4>
                    <div className={styles.techIconsGrid}>
                        {/* Left Side: New Tech */}
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.techIcon}>
                                <path d="M12 2L2 19.77h20L12 2zm0 3.5l7.15 12.77H4.85L12 5.5z" />
                                <path d="M11 10h2v5h-2z" />
                            </svg>
                            <span className={styles.techLabel}>Next.js</span>
                        </div>
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon}>
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                <path d="M12 8v4l3 3" />
                                <path d="M15 8h.01M17 11h.01M17 14h.01M15 17h.01M9 8h.01M7 11h.01M7 14h.01M9 17h.01" />
                            </svg>
                            <span className={styles.techLabel}>AI Automation</span>
                        </div>

                        {/* Middle: Existing Tech */}
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon}>
                                <circle cx="12" cy="12" r="2" />
                                <path d="M12 7a15 15 0 0 0-4.9 2.9M12 17a15 15 0 0 1 4.9-2.9M7 12a15 15 0 0 0 2.9 4.9M17 12a15 15 0 0 1-2.9-4.9" />
                                <path d="M7 12a15 15 0 0 1 2.9-4.9M17 12a15 15 0 0 0-2.9 4.9M12 7a15 15 0 0 1 4.9 2.9M12 17a15 15 0 0 0-4.9-2.9" />
                            </svg>
                            <span className={styles.techLabel}>React</span>
                        </div>
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.techIcon}>
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className={styles.techLabel}>AWS</span>
                        </div>
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={styles.techIcon}>
                                <path d="M22 6.5s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5V11c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3V6.5zM12 6.5s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5V11c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3V6.5z" />
                                <path d="M22 13s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5v2c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3v-2zM12 13s-2.03-.5-4.5-.5c-2.47 0-4.5.5-4.5.5v2c0 1.5 1.5 3 4.5 3s4.5-1.5 4.5-3v-2z" />
                            </svg>
                            <span className={styles.techLabel}>Docker</span>
                        </div>
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon}>
                                <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
                            </svg>
                            <span className={styles.techLabel}>Node.js</span>
                        </div>

                        {/* Right Side: New Tech */}
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon}>
                                <path d="M9 12h6" />
                                <circle cx="7" cy="12" r="2" />
                                <circle cx="17" cy="12" r="2" />
                                <path d="M12 7v10" />
                                <circle cx="12" cy="5" r="2" />
                                <circle cx="12" cy="19" r="2" />
                            </svg>
                            <span className={styles.techLabel}>n8n</span>
                        </div>
                        <div className={styles.techItem}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.techIcon}>
                                <path d="m12 2-8 3v11l8 3 8-3V5l-8-3z" />
                                <path d="m12 22 5-9-5-9-5 9 5 9z" />
                                <path d="M12 7V2" />
                                <path d="M12 22v-5" />
                                <path d="m17 13 5 2" />
                                <path d="m7 13-5 2" />
                                <path d="m17 11 5-2" />
                                <path d="m7 11-5-2" />
                            </svg>
                            <span className={styles.techLabel}>Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
