import React from "react";
import styles from "./about.module.css";


const AboutSection = () => {
    return (
        <section id="about" className={`${styles.section} `}>
            <div className={`${styles.aboutContent} `}>
                <h3>It tastes great!</h3>
                <h2 className="">BEVERAGES & FOOD YOU WON&apos;T FIND ANYWHERE ELSE</h2>
                <p>At Sunshine Coast Burger Company, fresh, local ingredients come together in mouthwatering, made-to-order burgers. 
                    With two  locations on the Sunshine Coast BC, we take pride in serving our community fresh local ingredients. 
                     Every bite delivers the taste of quality, because at Sunshine Coast Burger Company, we believe in great food, exceptional service, and supporting our local farmers.</p>
            </div>
            <div className={`${styles.videoSection} `}>
                <div className={`${styles.videoContainer} `}>
                    <video width="600" controls>
                        <source src="https://videos.pexels.com/video-files/4253723/4253723-uhd_2732_1440_25fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
     
        </section>
    );
};

export default AboutSection;