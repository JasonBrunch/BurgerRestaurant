import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "../components/sections/HeroSection.js";
import AboutSection from "../components/sections/AboutSection.js";
import MenuSection from "../components/sections/MenuSection";
import LocationSection from "../components/sections/LocationSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <LocationSection/>
      
    </main>
  );
}
