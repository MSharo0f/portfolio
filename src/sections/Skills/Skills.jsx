import styles from "./SkillStyle.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <br />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <br />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <br />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <br />
      </div>
      <hr />
      <div className="styles.skillList">
        <SkillList src={checkMarkIcon} skill="React" />
        <br />
        <SkillList src={checkMarkIcon} skill="Node" />
        <br />
        <SkillList src={checkMarkIcon} skill="Python" />
        <br />
        <SkillList src={checkMarkIcon} skill="Linux" />
      </div>
    </section>
  );
}

export default Skills;
