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
                            <p className="lightest-text">All beef patty, cheddar, pickles, onions, tomatoes, signature sauce.</p>
                        </div>
                    </div>

                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Bacon Cheeseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$15.50</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">All beef patty, cheddar, crispy bacon, lettuce, tomatoes, signature sauce.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Double Cheeseburger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$18.50</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Two beef patties, double cheddar, pickles, onions, tomatoes, special sauce.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Crispy Chicken Burger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$15.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Crispy chicken breast, lettuce, tomatoes, pickles, creamy mayo.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="white-text no-wrap">Homemade Veggie Burger</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$13.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="lightest-text">Grilled veggie patty, lettuce, tomatoes, pickles, avocado, spicy mayo.</p>
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
                            <h5 className="dark-text no-wrap">Crispy Fries</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$6.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Handcut golden fries, lightly salted, served hot and crispy.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Poutine</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$9.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Crispy fries, rich gravy, topped with cheese curds.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Onion Rings</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$7.50</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Crispy golden onion rings, served with zesty dipping sauce.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} `}>
                            <h5 className="dark-text no-wrap">Coleslaw</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$4.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Freshly shredded cabbage, carrots, tangy dressing.</p>
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
                            <h5 className="dark-text no-wrap">Chocolate Brownie</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$6.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Rich, fudgy brownie, served warm with chocolate drizzle.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} 2`}>
                            <h5 className="dark-text no-wrap">Cheesecake Slice</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$6.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Creamy New York cheesecake, with a graham cracker crust.</p>
                        </div>

                    </div>
                    <div className={`${styles.menuItem} `}>
                        <div className={`${styles.menuItemTopRow} 2`}>
                            <h5 className="dark-text no-wrap">Molten Lava Cake</h5>
                            <hr className={styles.horizontalLine} />
                            <h5 className="bright-red-text">$6.00</h5>
                        </div>
                        <div className={styles.menuItemBottomRow}>
                            <p className="light-text">Decadent chocolate cake with a gooey molten center.</p>
                        </div>

                    </div>
           
                </div>
            </div>
        </section>
    );
};

export default MenuSection;