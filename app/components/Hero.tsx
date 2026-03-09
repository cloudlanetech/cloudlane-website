import styles from "../theme/hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>
                Innovating Tomorrow.
                <br />
                Building Today.
            </h1>

            <p className={styles.subtext}>
                Empowering Businesses with cloud technology solutions from custom
                software to AI-Driven platforms, we engineer your digital success
            </p>

            <div className={styles.buttonGroup}>
                <a href="#contact" className={styles.primaryBtn}>
                    Get a Free Consultation
                </a>
                <a href="#portfolio" className={styles.secondaryBtn}>
                    View Our Work
                </a>
            </div>

            <div className={styles.trustBadge}>
                <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={styles.star}>
                            ★
                        </span>
                    ))}
                </div>
                <span className={styles.trustText}>Trusted by 50+ partners</span>
            </div>
        </section>
    );
}
