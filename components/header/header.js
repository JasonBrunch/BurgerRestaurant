import React from "react";
import styles from "./header.module.css";
import Image from "next/image";


const header = () => {
    return(
        <header className={`${styles.header} debug`}>
            <div className={styles.hamburger}>
                <Image src="/svgs/hamburger-menu.svg" alt="Menu" width={30} height={30} />
            </div>
            <div className={styles.logoContainer}>
                <Image src="/images/burgerlogo.png" alt="burger logo" width={40} height={40} className={styles.logo} />
            </div>
        </header>
    );
};

export default header;