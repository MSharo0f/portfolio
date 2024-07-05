import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/eye-modified.png";
import themeIcon from "../../assets/sun.svg";
import TwitterIcon from "../../assets/twitter-light.svg";
import GithubIcon from "../../assets/github-light.svg";
import LinkedinIcon from "../../assets/linkedin-light.svg";
import CV from '../../assets/Mahammad_Sharoof_resume.pdf'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className="{styles.colorModeContainer}">
        <img className={styles.heri} src={heroImg} alt="Just eye" />
        <img
          src={themeIcon}
          alt="Color mode icon"
          className={styles.colorMode}
        />
      </div>
      <div>
        <div className={styles.info}>
          <h1>
            Mahammad <br /> Sharoof
          </h1>
          <h2> Computer Science</h2>
          <span>
            <a href="https://twitter.com" target="_blank">
              <img src={TwitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src={GithubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src={LinkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p>
            Passionate about exploring and mastering new concepts in the world
            of computing.
          </p>
          <a href={CV} download>
            <button className="hover">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
