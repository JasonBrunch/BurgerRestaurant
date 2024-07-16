import React from "react";
import styles from "./header.module.css";
import Image from "next/image";


const header = () => {
    return(
        <header className={`${styles.header} `}>
            <div className={styles.hamburger}>
                <Image src="/svgs/hamburger-menu.svg" alt="Menu" width={24} height={24} />
            </div>
            <div className={styles.logoContainer}>
                <Image src="/images/burgerlogo.png" alt="burger logo" width={55} height={55} className={styles.logo} />
            </div>
        </header>
    );
};

export default header;