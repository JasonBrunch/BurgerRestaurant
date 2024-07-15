import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import HeroButton from "../buttons/HeroButton.js"


const HeroSection = () => {
    return (
        <section className={`${styles.hero} `}>
            <div className={`${styles.heroContent} `}>
                <h3 className={`${styles.heroText} `}>Sunshine Coast</h3>
                <div className={`${styles.heroImage} `}>
                    <Image
                        src="/images/burgerco.svg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt="Sunshine Coast Burger Company"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <HeroButton />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;