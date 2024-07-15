import React from "react";

import styles from "./squareOutlineButton.module.css"




const SOButton = ({text}) => {
    return(
        <button className={styles.button}  role="button">{text}</button>
    );
};

export default SOButton;