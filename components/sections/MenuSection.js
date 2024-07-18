import React from "react";
import styles from "./menu.module.css";




const MenuSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.burgerSection}>
                <h3 className={styles.title}>Burgers</h3>
                <div className={`${styles.menuItem} debug`}>
                    <div className={`${styles.menuItemTopRow} debug2`}>
                        <h5 className="white-text">Signature Chesseburger</h5>
                        <hr className={styles.horizontalLine} />
                        <h5 className="bright-red-text">$13.00</h5>
                    </div>
                    <div className={styles.menuItemBottomRow}>
                        <p className="lightest-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                    </div>

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
                <h3 className={styles.title}>Sides</h3>
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
                <h3 className={styles.title}>Sweets</h3>
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