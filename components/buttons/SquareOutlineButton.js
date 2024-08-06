import React from "react";

import styles from "./squareOutlineButton.module.css"




const SOButton = ({ text, onClick }) => {
    return (
        <button
            className={styles.button}
            role="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default SOButton;