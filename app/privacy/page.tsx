import styles from "../theme/legal.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | CloudLane",
    description: "CloudLane Privacy Policy - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
    return (
        <main className={styles.legalSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.title}>
                            <span>🔐</span> Privacy Policy
                        </h1>
                        <p className={styles.lastUpdated}>Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    </div>

                    <div className={styles.legalBox}>
                        {/* Column 1 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Personal details (name, email, phone number)</li>
                                    <li className={styles.listItem}>Account login credentials</li>
                                    <li className={styles.listItem}>Payment and billing information</li>
                                    <li className={styles.listItem}>Usage data (IP, browser type, pages)</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>To provide and maintain our services</li>
                                    <li className={styles.listItem}>To improve user experience</li>
                                    <li className={styles.listItem}>To process transactions and invoices</li>
                                    <li className={styles.listItem}>To communicate updates or support</li>
                                    <li className={styles.listItem}>To ensure security and prevent fraud</li>
                                </ul>
                            </section>
                        </div>

                        {/* Column 2 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>3. Data Sharing & Disclosure</h2>
                                <p className={styles.text}>We <strong>do not sell your data</strong>. Data may be shared with:</p>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Trusted third-party services</li>
                                    <li className={styles.listItem}>Legal authorities if required</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>4. Data Security</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Industry-standard security measures</li>
                                    <li className={styles.listItem}>Encryption and secure servers</li>
                                    <li className={styles.listItem}>No system is 100% secure</li>
                                </ul>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>5. User Rights</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Access your data</li>
                                    <li className={styles.listItem}>Request correction or deletion</li>
                                    <li className={styles.listItem}>Opt-out of marketing emails</li>
                                </ul>
                            </section>
                        </div>

                        {/* Column 3 */}
                        <div className={styles.column}>
                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>6. Third-Party Links</h2>
                                <p className={styles.text}>Our website may contain external links. We are not responsible for their privacy practices.</p>
                            </section>

                            <section className={styles.section}>
                                <h2 className={styles.sectionTitle}>7. Policy Updates</h2>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>We may update this policy anytime</li>
                                    <li className={styles.listItem}>Changes reflected with new “Effective Date”</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
