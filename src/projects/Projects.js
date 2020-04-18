import React from 'react'

import "./Projects.css";
import Project from "../project/Project";


function Projects() {
  const projectTitle = "Project Title";
  const projectDescription = "Describe what the project entails and the technologies used";

  return (
    <div>
      <h2 className="center section-heading">Projects</h2>
      <section id="projects" className="section section__projects">
        <Project title={projectTitle} description={projectDescription} />
        <Project title={projectTitle} description={projectDescription} />
        <Project title={projectTitle} description={projectDescription} />
        <Project title={projectTitle} description={projectDescription} />
      </section>
    </div>
  )
}

export default Projects;
