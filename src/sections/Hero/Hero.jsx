import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/eye-modified.png";
import themeIcon from "../../assets/sun.svg"
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className="{styles.colorModeContainer}">
        <img className={styles.heri} src={heroImg} alt="Just eye" />
        <img src={themeIcon} alt="Color mode icon" className={styles.colorMode} />
      </div>
    </section>
  );
}

export default Hero;
