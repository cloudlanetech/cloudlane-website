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
            </div>
        </section>
    );
}
