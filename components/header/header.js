import React from "react";
import Link from 'next/link';
import styles from "./header.module.css";
import Image from "next/image";


const header = () => {
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
                        <Link href="/">
                            <h5>HOME</h5>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <h5>ABOUT</h5>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <h5>MENU</h5>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <h5>CONTACT</h5>
                        </Link>
                    </li>
                </ul>


            </div>
            <div className={styles.socialMediaContainer}>
                <Image src="/svgs/instagram.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
                <Image src="/svgs/facebook.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
                <Image src="/svgs/trip-advisor.svg" alt="Social Media Icon" className={styles.socialIcon} width={35} height={35} />
            </div>
        </header>
    );
};

export default header;