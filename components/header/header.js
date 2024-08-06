'use client';


import React from "react";
import Link from 'next/link';
import styles from "./header.module.css";
import Image from "next/image";


const header = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <header className={`${styles.header} `}>
            <div className={`${styles.hamburger} `}>
                <Image src="/svgs/hamburger-menu.svg" alt="Menu" width={24} height={24} />
            </div>
            <div className={`${styles.logoContainer}  `}>
                <Image src="/images/burgerlogo.png" alt="burger logo" width={55} height={55} className={styles.logo} />
            </div>
            <div className={`${styles.linkContainer}  `}>
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
        </header>
    );
};

export default header;