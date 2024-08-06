import React from "react";

import styles from "./pillButton.module.css"




const PillButton = ({onClick}) => {
    return(
        <button className={styles.button}  role="button" onClick={onClick}>GET DIRECTIONS</button>
    );
};

export default PillButton;