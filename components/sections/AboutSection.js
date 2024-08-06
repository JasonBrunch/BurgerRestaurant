import React from "react";
import styles from "./about.module.css";


const AboutSection = () => {
    return (
        <section id="about" className={`${styles.section} `}>
            <div className={`${styles.aboutContent} `}>
                <h3>It tastes great!</h3>
                <h2 className="">BEVERAGES & FOOD YOU WON'T FIND ANYWHERE ELSE</h2>
                <p>Lorem ipsum dolor sit amet, admodum civibus delicatissimi mei cu. Has eu impedit vocibus,
                    ut his doctus definitiones, no expetenda deseruisse nam. Nusquam urbanitas in vix. Ex sea
                    reque senserit, mea te ullum errem. Debet docendi deserunt duo an, Magna molestie duo id.
                    Usu ad alienum suscipit posidonium, ut est invidunt indoctum accusamus.</p>
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