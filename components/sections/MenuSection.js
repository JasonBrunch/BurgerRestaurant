import React from "react";
import styles from "./menu.module.css";




const MenuSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.burgerSection}>
                <h1 className={styles.title}>Burgers</h1>
                <div className={styles.menuItem}>
                    <h5 className="white-text">Signature Chesseburger</h5>
                    <h5 className="bright-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="white-text">Signature Chesseburger</h5>
                    <h5 className="bright-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="white-text">Signature Chesseburger</h5>
                    <h5 className="bright-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="white-text">Signature Chesseburger</h5>
                    <h5 className="bright-red-text">$13.00</h5>
                </div>
            </div>
            <div className={styles.sidesSection}>
                <h1 className={styles.title}>Sides</h1>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
            </div>
            <div className={styles.sweetsSection}>
                <h1 className={styles.title}>Sweets</h1>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
                <div className={styles.menuItem}>
                    <h5 className="medium-text">Signature Chesseburger</h5>
                    <h5 className="light-red-text">$13.00</h5>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;