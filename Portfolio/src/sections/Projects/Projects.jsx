import React, { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/k1.png';
import freshBurger from '../../assets/k1.png';
import hipsster from '../../assets/k1.png';
import fitLift from '../../assets/k1.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const [projectsToShow, setProjectsToShow] = useState('django'); // 'django' or 'flask'
  const [activeButton, setActiveButton] = useState('django'); // 'django' or 'flask'

  const handleDjangoClick = () => {
    setProjectsToShow('django');
    setActiveButton('django');
  };

  const handleFlaskClick = () => {
    setProjectsToShow('flask');
    setActiveButton('flask');
  };
  const handleReactClick = () => {
    setProjectsToShow('react');
    setActiveButton('react');
  };

  return (
    <section id="projects" className={styles.container}><br /><br /><br /><br />
      <h1 className="sectionTitle">Projects</h1>
      
      {/* Buttons for Django and Flask */}
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${activeButton === 'django' ? styles.activeButton : ''}`} onClick={handleDjangoClick}>Django</button>&#160;&#160;&#160;&#160;
        <button className={`${styles.button} ${activeButton === 'flask' ? styles.activeButton : ''}`} onClick={handleFlaskClick}>Flask</button>&#160;&#160;&#160;&#160;
        <button className={`${styles.button} ${activeButton === 'react' ? styles.activeButton : ''}`} onClick={handleReactClick}>React</button>
      </div><br /><br /><br />
      

      {/* Projects Container */}
      <div className={styles.projectsContainer}>
        {projectsToShow === 'django' && (
          <>
            <ProjectCard
              src={viberr}
              link="https://github.com/"
              h3="broject 6"
              p="broject 6"
            />
            <ProjectCard
              src={freshBurger}
              link="https://github.com/"
              h3="broject 5"
              p="broject 5"
            />
          </>
        )}

        {projectsToShow === 'flask' && (
          <>
            <ProjectCard
              src={hipsster}
              link="https://github.com/"
              h3="broject 4"
              p="broject 4"
            />
            <ProjectCard
              src={fitLift}
              link="https://github.com/"
              h3="broject 3"
              p="broject 3"
            />
          </>
        )}
        {projectsToShow === 'react' && (
          <>
            <ProjectCard
              src={freshBurger}
              link="https://github.com/"
              h3="broject 2"
              p="broject 2"
            />
            <ProjectCard
              src={viberr}
              link="https://github.com/"
              h3="broject 1"
              p="broject 1"
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
