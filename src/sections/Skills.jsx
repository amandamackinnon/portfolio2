import React from "react";

  import 'devicon/devicon.min.css'; 

function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  ];

  const tools = [
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "Axios", icon: "devicon-axios-plain colored" },
    {name: "VS Code", icon: "devicon-vscode-plain colored" },
  ];

  const renderSkills = (skillsArray) =>
    skillsArray.map((skill) => (
      <div className="skill-card" key={skill.name}>
        <i className={skill.icon}></i>
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <h3>Frontend</h3>
      <div className="skills-grid">{renderSkills(frontendSkills)}</div>

      <h3>Backend</h3>
      <div className="skills-grid">{renderSkills(backendSkills)}</div>

      <h3>Tools</h3>
      <div className="skills-grid">{renderSkills(tools)}</div>
    </section>
  );
}

export default Skills;