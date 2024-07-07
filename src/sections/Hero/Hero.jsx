import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/eye-modified.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import TwitterLight from "../../assets/twitter-light.svg";
import GithubLight from "../../assets/github-light.svg";
import LinkedinLight from "../../assets/linkedin-light.svg";
import TwitterDark from "../../assets/twitter-dark.svg";
import GithubDark from "../../assets/github-dark.svg";
import LinkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Mahammad_Sharoof_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const TwitterIcon = theme === "light" ? TwitterLight : TwitterDark;
  const GithubIcon = theme === "light" ? GithubLight : GithubDark;
  const LinkedinIcon = theme === "light" ? LinkedinLight : LinkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Just eye' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mahammad <br /> Sharoof
        </h1>
        <h2> Computer Science</h2>
        <span>
          <a href='https://twitter.com' target='_blank'>
            <img src={TwitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/MSharo0f' target='_blank'>
            <img src={GithubIcon} alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/mahammad-sharoof/' target='_blank'>
            <img src={LinkedinIcon} alt='Linkedin icon' />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about exploring and mastering new concepts in the world of
          computing.
        </p>
        <a href={CV} download>
          <button className={styles.button}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
