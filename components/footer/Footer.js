import React from "react";
import styles from "./footer.module.css";




const Footer = () => {
    return (
        <footer>
            <section className={styles.topSection}>
                <h5>(h5)OPENING HOURS</h5>
                <div className={styles.hoursContainer}>
                    <div className={styles.hoursLine}>
                        <h6>(h6)MONDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)TUESDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)WEDNESDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)THURSDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)FRIDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)SATURDAY</h6>
                        <hr />
                        <p>10:00am - 10:00pm</p>
                    </div>
                    <div className={styles.hoursLine}>
                        <h6>(h6)SUNDAY</h6>
                        <hr />
                        <p>CLOSED</p>
                    </div>
                </div>
                <h5>(h5)CONTACT US</h5>
                <p>info@scburgerco.ca <br />
                    1-604-720-8680 <br />
                    23419 Gray Rd. <br />
                    Sechelt, BC <br />
                </p>
                <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                <div className={styles.formContainer}>
                    <form action="">
                        <input type="text" id="userEmail" placeholder="your email" required />
                        <button type="submit">+</button>
                    </form>
                </div>
            </section >
            <section className={styles.bottomSection}>
                <p>Stuff Goes Here</p>
                <div className={styles.socialMediaContainer}>
                    social media icons go Here
                </div>
                <p>C 2024 Spacedog Interactive. All Rights Reserved</p>
            </section>
        </footer>
    );
};

export default Footer;