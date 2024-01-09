import React from 'react'
import styles from "./skills.module.css"
import cssimg from "../../assets/css.png"
import chakraimg from "../../assets/chakra.png"
import gitimg from "../../assets/git.png"
import githubimg from "../../assets/github.png"
import htmlimg from "../../assets/html.png"
import jsimg from "../../assets/javascript.png"
import reactimg from "../../assets/react.png"
import cypressimg from "../../assets/cypressimg.png"
import dsaimg from "../../assets/dsaimage.png"
import expressimg from "../../assets/expressimg.png"
import mongodbimg from "../../assets/mongodb-seeklogo.svg"
import reduximg from "../../assets/redux-seeklogo.svg"
import nodejsimg from "../../assets/nodejsimage.png"
import typescriptimg from "../../assets/typescriptimage.png"
import OpenAI from "../../assets/OpenAI.webp"
import Postman from "../../assets/Postman.png"
import vsimg from "../../assets/vs.jpg"
const codesandimg = "https://ci.codesandbox.io/static/favicon.ico"

const Skills = () => {
  const SkillsArr = [
    {
      id: 1,
      source: htmlimg,
      name: "HTML",
      colour: "#e44d26",
    },
    {
      id: 2,
      source: cssimg,
      name: "CSS",
      colour: "#0277bd",
    },
    {
      id: 3,
      source: jsimg,
      name: "JavaScript",
      colour: "#ffd600",
    },
    {
      id: 4,
      source: reactimg,
      name: "React",
      colour: "#14dbff",
    },
    {
      id: 5,
      source: reduximg,
      name: "Redux",
      colour: "#764abc",
    },
   
    {
      id: 8,
      source: chakraimg,
      name: "Chakra",
      colour: "#4db6ac",
    },
    {
      id: 10,
      source: typescriptimg,
      name: "TypeScript",
      colour: "#2d79c7",
    },
    {
      id: 11,
      source: nodejsimg,
      name: "NodeJS",
      colour: "#81cf08",
    },
    {
      id: 12,
      source: mongodbimg,
      name: "MongoDB",
      colour: "#8dbe71",
    },
    {
      id: 13,
      source: expressimg,
      name: "ExpressJS",
      colour: "black",
    },
    {
      id: 14,
      source: cypressimg,
      name: "Cypress",
      colour: "#26e99c",
    },
    {
      id: 15,
      source: dsaimg,
      name: "DSA",
      colour: "#11a2cb",
    },
  ]

  const ToolsArr = [
    {
      id: 1,
      source: vsimg,
      name: "VS Code",
      colour: "#3c99d4",
    },
    {
      id: 9,
      source: gitimg,
      name: "Git",
      colour: "#f2655b",
    },
    {
      id: 7,
      source: githubimg,
      name: "Github",
      colour: "#3e77bf",
    },
    {
      id: 2,
      source: OpenAI,
      name: "Open-AI",
      colour: "#924e96",
    },
    {
      id: 3,
      source: codesandimg,
      name: "CodeSandbox",
      colour: "black",
    },
    {
      id: 4,
      source: Postman,
      name: "Postman",
      colour: "#f2655b",
      
    },

  ]

  return (
    <section className={styles.skill__section} id="skills">
      <h1 className={styles.skill_heading}>Skills</h1>
      <p className={styles.skill__description}>What I know</p>


      <div className={styles.skills__secondmaindiv}>
        <div className={styles.skills_grid_div}>
          {SkillsArr.map(({ id, source, name, colour }) => (
            <div className={styles.skills__skilldiv} key={id} style={{ boxShadow: `0 4px 6px -1px ${colour}, 0 2px 4px -2px ${colour}` }}>
              <img src={source} alt="skills" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skils_toolsdiv}>
        <h1 className={styles.skill_heading}>Tools</h1>
        <p className={styles.skill__description}>Tools I Used</p>


        <div className={styles.skills__secondmaindiv}>
          <div className={styles.skills_grid_div}>
            {ToolsArr.map(({ id, source, name, colour }) => (
              <div className={styles.skills__skilldiv} key={id} style={{ boxShadow: `0 4px 6px -1px ${colour}, 0 2px 4px -2px ${colour}` }}>
                <img src={source} alt="skills" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


  )
}

export default Skills;