'use client';

import React, { useState } from "react";
import Link from 'next/link';
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close menu after clicking a link
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header}`}>
            <button 
                className={`${styles.hamburger}`} 
                onClick={toggleMenu}
            >
                <Image src="/svgs/hamburger-menu.svg" alt="Menu" width={24} height={24} />
            </button>
            <div className={`${styles.logoContainer}`}>
                <Image src="/images/burgerlogo.png" alt="burger logo" width={55} height={55} className={styles.logo} />
            </div>
            <div className={`${styles.linkContainer}`}>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="/" scroll={false} onClick={() => scrollToSection('home')}>
                            HOME
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/" scroll={false} onClick={() => scrollToSection('about')}>
                            ABOUT
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/" scroll={false} onClick={() => scrollToSection('menu')}>
                            MENU
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/" scroll={false} onClick={() => scrollToSection('location')}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.socialMediaContainer}>
                <Link href="http://www.instagram.com" target="_blank">
                    <Image src="/svgs/instagram.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
                </Link>
                <Link href="http://www.facebook.com" target="_blank">
                    <Image src="/svgs/facebook.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
                </Link>
                <Link href="http://www.tripadvisor.com" target="_blank">
                    <Image src="/svgs/trip-advisor.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
                </Link>
            </div>
            {/* Overlay for the mobile menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenuOverlay}>
                    <button className={styles.closeMenuButton} onClick={toggleMenu}>
                        <Image src="/svgs/close-icon.svg" alt="Close" width={24} height={24} />
                    </button>
                    <ul className={styles.mobileNavLinks}>
                        <li className={styles.mobileNavItem}>
                            <Link href="/" scroll={false} onClick={() => scrollToSection('home')}>
                                HOME
                            </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <Link href="/" scroll={false} onClick={() => scrollToSection('about')}>
                                ABOUT
                            </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <Link href="/" scroll={false} onClick={() => scrollToSection('menu')}>
                                MENU
                            </Link>
                        </li>
                        <li className={styles.mobileNavItem}>
                            <Link href="/" scroll={false} onClick={() => scrollToSection('location')}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;