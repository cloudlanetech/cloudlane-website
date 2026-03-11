"use client";

import styles from "../theme/outro.module.css";

export default function Outro() {
    return (
        <section className={styles.outroSection}>
            <div className={styles.content}>
                <h2 className={styles.headline}>Ready to move to the cloud?</h2>
                <p className={styles.subheadline}>
                    We handle the infra. You focus on the product.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href="/book" className={styles.ctaButton}>
                        Book an Intro Call
                    </a>
                </div>
            </div>
        </section>
    );
}
