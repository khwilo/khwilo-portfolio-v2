import React from "react";

import "./Project.css";

function Project({ title, description }) {

  return (
    <section className="project">
      <h2 className="project__title">{title}</h2>
      <div className="project__description">
        {description}
      </div>
    </section>
  )
}

export default Project;
