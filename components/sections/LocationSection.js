import React from "react";
import styles from "./location.module.css";
import SOButton from "../buttons/SquareOutlineButton";
import PillButton from "../buttons/PillButton";



const LocationSection = () => {
    return (
        <section className={styles.section}>
            <h2>LOCATIONS</h2>
            <div className={styles.buttonContainer}>
                <SOButton text="GIBSONS" />
                <SOButton text="SECHELT" />
            </div>
            <h4 className="dark-text center-text">1873 W 4TH AVE. < br/>
             VANCOUVER BC. <br/> V6J 1M4<br/>
             (604) 732-9545 <br/>
              EMAIL: GMFA@XTRAMILE.CA
            </h4>
            <PillButton/>


        </section>
    );
};

export default LocationSection;