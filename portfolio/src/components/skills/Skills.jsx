import React from "react";
import "./Skills.css";
import Html from "../../assets/html.png";
import CSS from "../../assets/css3.svg";
import JS from "../../assets/javascript.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Bootstrap from "../../assets/Bootstrap.svg";
import ReactJS from "../../assets/react.svg";
import Typescript from "../../assets/typescript.webp";
import Git from "../../assets/git.svg";

const skillsData = [
  { img: Html, name: "HTML5", desc: "Markup Language" },
  { img: CSS, name: "CSS3", desc: "User Interface" },
  { img: JS, name: "Javascript", desc: "Interaction" },
  { img: Typescript, name: "Typescript", desc: "Interaction" },
  { img: Bootstrap, name: "Bootstrap", desc: "User Interface" },
  { img: Tailwind, name: "Tailwind", desc: "User Interface" },
  { img: ReactJS, name: "React JS", desc: "Frontend Library" },
  { img: Git, name: "Git", desc: "Open Source" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container skills_container">
        <div className="header">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>
        </div>

        <div className="myskills">
          <div className="row">
            {skillsData.map((skill, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 skill-item">
                <div className="card-skill">
                  <div className="img">
                    <img src={skill.img} alt={`${skill.name} Logo`} />
                  </div>
                  <div className="skill-name">{skill.name}</div>
                  <p>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
