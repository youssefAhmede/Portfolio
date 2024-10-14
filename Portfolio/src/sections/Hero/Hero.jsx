import styles from './HeroStyles.module.css';
import heroImg from '../../assets/k1.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv1.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    
    <section id="hero" className={styles.container}><br /><br /><br /><br /><br /><br />
      <div className={styles.colorModeContainer}>
        
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Youssef
          <br />
          Ahmed
        </h1>
        <h2>fullstack Developer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/YoussefAhmedi" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/youssef-ahmed-i/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          
        
        </span>
        <p>
        Django and React for Top-Notch Web Apps <br /> Great Things Are Simple, So Explore <br /> My Work and Keep It Friendly!<br/><br/>
          <p className={styles.spanWisdom1}>&quot;Simplicity is the <br /> ultimate sophistication.&quot;</p>
          <p className={styles.spanWisdom2}>– Leonardo da Vinci</p>
          </p>
        
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
