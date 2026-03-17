import styles from "../theme/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | CloudLane",
    description: "CloudLane Terms of Service - Please read these terms carefully before using our services.",
};

export default function TermsOfService() {
    return (
        <main className={styles.legalSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.title}>
                            <span>📜</span> Terms of Service
                        </h1>
                        <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>

                    <div className={styles.legalBox}>
                        {/* Column 1 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>By using our platform, you agree to these terms</li>
                                    <li className={styles.listItem}>If you disagree, please do not use our services</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>2. Use of Services</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>You must be at least 18 years old</li>
                                    <li className={styles.listItem}>You agree not to misuse the platform</li>
                                    <li className={styles.listItem}>No illegal or unauthorized activities allowed</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>3. User Accounts</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>You are responsible for your account security</li>
                                    <li className={styles.listItem}>Provide accurate and complete information</li>
                                    <li className={styles.listItem}>Notify us immediately of unauthorized access</li>
                                </ul>
                            </section>
                        </div>

                        {/* Column 2 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>4. Payments & Billing</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Services may be paid or subscription-based</li>
                                    <li className={styles.listItem}>Payments are non-refundable unless stated</li>
                                    <li className={styles.listItem}>Failure to pay may result in suspension</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>5. Intellectual Property</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>All content and branding belong to us</li>
                                    <li className={styles.listItem}>You may not copy or modify without permission</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>6. Service Availability</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Maintenance or issues may cause downtime</li>
                                    <li className={styles.listItem}>We strive for uptime but don't guarantee it</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
                                <p className={styles.text}>We are not liable for data loss, business losses, or indirect damages.</p>
                            </section>
                        </div>

                        {/* Column 3 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>8. Termination</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>We can suspend accounts for violations</li>
                                    <li className={styles.listItem}>Users can stop using services anytime</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>9. Changes to Terms</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Terms may be updated periodically</li>
                                    <li className={styles.listItem}>Continued use means acceptance of updates</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>10. Governing Law</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Terms are governed by applicable local laws in India.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
