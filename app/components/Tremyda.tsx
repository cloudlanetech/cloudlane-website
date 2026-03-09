import styles from "../theme/tremyda.module.css";

export default function Tremyda() {
    return (
        <section id="tremyda" className={styles.tremyda}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        Next-Generation
                        <br />
                        Health Data
                        <br />
                        Platform
                    </h2>
                    <h3 className={styles.subtitle}>
                        Transforming Healthcare Data Management
                    </h3>
                    <p className={styles.description}>
                        Tremyda is the comprehensive health data platform that helps
                        healthcare organizations collect, manage, and share data
                        effectively. Our platform supports clinical studies, medical
                        research, remote patient monitoring, and more.
                    </p>
                </div>
                <div className={styles.imagePlaceholder} />
            </div>
        </section>
    );
}
