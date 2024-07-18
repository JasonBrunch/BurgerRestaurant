import React from "react";
import styles from "./gallery.module.css";
import Image from "next/image";

const PhotoGallery = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.gridItem}>
        <Image src="/images/burger1.png" alt="Image 1" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.gridItem}>
        <Image src="/images/burger2.png" alt="Image 2" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.gridItem}>
        <Image src="/images/burger3.png" alt="Image 3" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.gridItem}>
        <Image src="/images/burger4.png" alt="Image 4" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};

export default PhotoGallery;