import styles from './HeroStyles.module.css';
import pfp from '../../assets/pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Pranav Rao Resume.pdf';
import { useTheme } from '../../Common/ThemeContext.jsx';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={pfp}
          alt="Profile Picture of Pranav Rao"></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light/Dark Mode"
          onClick={toggleTheme}></img>
      </div>
      <div className={styles.info}>
        <h1>
          Pranav
          <br /> Rao
        </h1>
        <h2>Student at Rutgers University</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/pranav-rao-09610022b/"
            target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/pranavsrao6" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a junior at Rutgers University–New Brunswick, where I am pursuing
          a Bachelor's Degree in Computer Science as well as Data Science. I am
          currently looking for a Technology Internship to gain work experience
          and apply my skills in real-world scenarios. I am deeply passionate
          about exploring the intersection of Data Analytics and Computer
          Programming. I have experience in programming in different languages
          and expanding my knowledge in data modeling. I am highly motivated and
          looking forward to the challenges ahead!
        </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
