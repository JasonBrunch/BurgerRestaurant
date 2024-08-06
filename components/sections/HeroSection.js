'use client';

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import HeroButton from "../buttons/HeroButton.js"
import Link from "next/link";


const HeroSection = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className={`${styles.hero} `}>
            <div className={`${styles.heroContent} `}>
                <h1 className={`${styles.heroText} `}>Sunshine Coast</h1>
                <div className={`${styles.heroImage} `}>
                    <Image
                        src="/svgs/burgerCompany.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt="Sunshine Coast Burger Company"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    
                    <HeroButton onClick={() => scrollToSection('menu')} />
                </div>
            </div>
            <div className={styles.overlappingImage}>
                <Image
                    src="/images/fallingBurger.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="Overlapping Image"
                />
            </div>
        </section>
    );
};

export default HeroSection;