import React, { useState } from "react";
import { Link } from "react-scroll";
import "./HeaderStyle.css";
import { useTheme } from "../../common/ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Header() {
  const [click, setClick] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => setClick(!click);

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <header className="header">
      <div className="navbar">
        <Link to="hero" smooth={true} duration={1000}>
          <h4
            style={{
              fontFamily: "'Playwrite CU', cursive",
              fontOpticalSizing: "auto",
              fontWeight: "300",
              fontStyle: "normal",
            }}
          >
            Sharoof's Portfolio
          </h4>
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <nav className={click ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="hero" smooth={true} offset={50} duration={1000}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} offset={-290} duration={1000}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} offset={-250} duration={1000}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} offset={-150} duration={1000}>
                Contact
              </Link>
            </li>
            <li className="nav-item theme-toggle">
              <img
                src={themeIcon}
                alt="Color mode icon"
                onClick={toggleTheme}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
