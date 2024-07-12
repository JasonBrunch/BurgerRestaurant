import React from "react";
import styles from "./menu.module.css";




const MenuSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.burgerSection}>
                <h1 className={styles.title}>(h1)Burgers</h1>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
            </div>
            <div className={styles.sidesSection}>
                <h1 className={styles.title}>(h1)Sides</h1>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
            </div>
            <div className={styles.sweetsSection}>
                <h1 className={styles.title}>(h1)Sweets</h1>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5>(h5)Signature Chesseburger</h5>
                    <h5>(h5)$13.00</h5>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;