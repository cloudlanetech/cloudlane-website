"use client";

import styles from "../theme/socialProof.module.css";


function PlaceholderCard() {
    return (
        <div className={styles.placeholderCard}>
            <div className={styles.cardShimmer} />
        </div>
    );
}

export default function SocialProof() {
    // Duplicate for marquee effect
    const placeholders = Array(10).fill(null);
    const doubledPlaceholders = [...placeholders, ...placeholders];

    return (
        <section className={styles.socialProofSection}>
            <div className={styles.container}>
                {/* Header: Heading on left, Pills on right (from SS2/SS1) */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Simplifying <br />
                        Technology for <br />
                        <span className={styles.accentText}>Modern <br />Business</span>
                    </h2>
                </div>

                {/* Marquee with Blank Dark Cards (from SS3) */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeRow}>
                        {doubledPlaceholders.map((_, i) => (
                            <PlaceholderCard key={`top-${i}`} />
                        ))}
                    </div>
                    <div className={styles.marqueeRowReverse}>
                        {doubledPlaceholders.map((_, i) => (
                            <PlaceholderCard key={`bottom-${i}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
