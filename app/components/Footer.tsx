"use client";

import styles from "../theme/footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerMain}>
                    {/* Branding Column */}
                    <div className={styles.branding}>
                        <div className={styles.logoWrapper}>
                            <div className={styles.logoIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <span className={styles.logoText}>CloudLane</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Crafting digital solutions with passion and expertise. 
                            Transforming ideas into powerful applications for the modern web.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.399 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links Column */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnHeading}>
                            Useful Links
                        </h4>
                        <nav className={styles.navLinks}>
                            <a href="/book" className={styles.navLink}>Contact</a>
                            <a href="#" className={styles.navLink}>Privacy Policy</a>
                            <a href="#" className={styles.navLink}>Terms of Service</a>
                            <a href="#" className={styles.navLink}>Cookie Policy</a>
                        </nav>
                    </div>

                    {/* Contact Information Column */}
                    <div className={styles.contactColumn}>
                        <h4 className={styles.columnHeading}>Contact Information</h4>
                        <div className={styles.contactItems}>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2644ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span className={styles.contactValue}>+91 77775954978</span>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2644ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span className={styles.contactValue}>shubham@cloudlane.in</span>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2644ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className={styles.contactValue}>Casa Poli, Wakad, Pune, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <p>© 2025 CloudLane. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
