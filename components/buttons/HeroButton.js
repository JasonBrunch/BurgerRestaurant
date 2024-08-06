import React from "react";

import styles from "./heroButton.module.css"




const HeroButton = ({onClick}) => {
    return(
        <button className={styles.heroButt} role="button" onClick={onClick}>SEE MENU</button>
    );
};

export default HeroButton;