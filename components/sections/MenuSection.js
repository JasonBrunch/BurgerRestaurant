import React from "react";
import styles from "./menu.module.css";
import SVGDivider from "@/components/SvgPageDivider.js";
import Image from "next/image";





const MenuSection = () => {
    return (
        <section id="menu" className={styles.section}>
              <div className={`${styles.divider} `}>
                 <SVGDivider topColor="#f3f0e7" bottomColor="#232323" />  
                 </div>   
            <div className={`${styles.burgerSection}  `}>
                
                <div className={styles.overlappingImage1}>
                    <Image
                        src="/images/friesInBucket.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Overlapping Image"
                    />
                </div>
                <div className={`${styles.menuItemContainer}  `}>
                    <h3 className={styles.title}>Burgers</h3>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>


                </div>



            </div>


            <SVGDivider topColor="#232323" bottomColor="#f3f0e7" />

            <div className={styles.sidesSection}>
            <div className={styles.overlappingImage2}>
                    <Image
                        src="/images/cola.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Overlapping Image"
                    />
                </div>
                
                <div className={`${styles.menuItemContainer} `}>
                    <h3 className={styles.title}>Sides</h3>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                </div>
            </div>


            <SVGDivider topColor="#f3f0e7" bottomColor="#9ed4d4" />



            <div className={styles.sweetsSection}>
                
            <div className={styles.overlappingImage3}>
                    <Image
                        src="/images/donuts.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Overlapping Image"
                    />
                </div>

                <div className={`${styles.menuItemContainer} `}>
                    <h3 className={styles.title}>Sweets</h3>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} 2`}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} 2`}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} 2`}>
                            <h5 className="dark-text no-wrap">Signature Chesseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Loprem ipsum dolor sit amet, consecttetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;