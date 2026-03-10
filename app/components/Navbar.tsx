"use client";

import styles from "../theme/navbar.module.css";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Tremyda", href: "#tremyda" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            {/* THE BLUR LAYER */}
            <div className={styles.navbarBlur}></div>

            {/* CONTENT ABOVE BLUR */}
            <div className={styles.navbarContent}>
                <a href="/" className={styles.logo}>
                    CloudLane<span className={styles.logoDot}>.</span>
                </a>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#contact" className={styles.ctaButton}>
                    Book an Intro Call
                </a>

                <button className={styles.mobileMenuBtn} aria-label="Open menu">
                    ☰
                </button>
            </div>
        </header>
    );
}
