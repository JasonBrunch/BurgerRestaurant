import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";



const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.topSection}>
               
                <div className={styles.hoursContainer}>
                     <h5>OPENING HOURS</h5>
                    <div className={styles.hoursLine}>
                        <h6 >MONDAY</h6>
                        <hr />
                        <p >10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>TUESDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>WEDNESDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>THURSDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>FRIDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>SATURDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>SUNDAY</h6>
                        <hr />
                        <p>CLOSED</p>
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <h5>CONTACT US</h5>
                    <p className="light-text">info@scburgerco.ca <br />
                        1-604-720-8680 <br />
                        23419 Gray Rd. <br />
                        Sechelt, BC <br />
                    </p>
                     <div className={styles.newsletterContainer}>
                    <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                    <div className={styles.formContainer}>
                        <form action="">
                            <input type="text" id="userEmail" placeholder="Your email" required />
                            <button type="submit">+</button>
                        </form>
                    </div>
                </div>
                
                </div>
           
            </section >
            <section className={styles.bottomSection}>
                <p className="smaller-text">Stuff Goes Here</p>
                <div className={styles.socialMediaContainer}>
                    <Image src="/svgs/instagram.svg" alt="Social Media Icon" className={styles.socialIcon} width={40} height={40} />
                    <Image src="/svgs/facebook.svg" alt="Social Media Icon" className={styles.socialIcon} width={40} height={40} />
                    <Image src="/svgs/trip-advisor.svg" alt="Social Media Icon" className={styles.socialIcon} width={40} height={40} />
                </div>
                <p className="smaller-text">C 2024 Spacedog Interactive. All Rights Reserved</p>
            </section>
        </footer>
    );
};

export default Footer;