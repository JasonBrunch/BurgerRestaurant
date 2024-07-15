import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import HeroButton from "../buttons/HeroButton.js"


const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.heroContent} debug2`}>
                <h3 className={`${styles.heroText} debug`}>Sunshine Coast</h3>
                <div className={`${styles.heroImage} debug3`}>
                    <Image
                        src="/images/burgerco.svg"
                        alt="Burger Company"
                        height={200}
                        width={200}
                        layout="responsive"
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