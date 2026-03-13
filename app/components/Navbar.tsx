"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../theme/navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isBookPage = pathname === "/book";

    const navLinks = [
        { label: "Home", href: "/", show: isBookPage },
        { label: "Services", href: isBookPage ? "/#services" : "#services", show: true },
        { label: "Tremyda", href: isBookPage ? "/#tremyda" : "#tremyda", show: true },
        { label: "Contact", href: "/book", show: !isBookPage },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                    {navLinks.filter(link => link.show).map((link) => (
                        <a key={link.label} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="/book" className={styles.ctaButton}>
                    Book an Intro Call
                </a>

                <button 
                    className={styles.mobileMenuBtn} 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileNavLinks}>
                    {navLinks.filter(link => link.show).map((link) => (
                        <a 
                            key={link.label} 
                            href={link.href} 
                            className={styles.mobileNavLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="/book" 
                        className={styles.mobileCta}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book an Intro Call
                    </a>
                </div>
            </div>
        </header>
    );
}
