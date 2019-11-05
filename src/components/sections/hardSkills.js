import React from "react"
// import SkillBar from "react-skillbars"

const SKILLS1 = [
  {
    type: "TypeScript",
    level: 75,
  },
  {
    type: "JavaScript",
    level: 70,
  },
  {
    type: "ReactJS",
    level: 68,
  },
  {
    type: "Angular",
    level: 60,
  },
  {
    type: "VueJS",
    level: 30,
  },
  {
    type: "NestJS",
    level: 60,
  },
]

const SKILLS2 = [
  {
    type: "PHP",
    level: 80,
  },
  {
    type: "Laravel",
    level: 65,
  },
  {
    type: "CodeIgniter",
    level: 75,
  },
  {
    type: "WordPress",
    level: 67,
  },
  {
    type: "ProcessWire",
    level: 70,
  },
]

const SKILLS3 = [
  // php
  {
    type: "HTML",
    level: 99,
  },
  {
    type: "CSS3",
    level: 80,
  },
  {
    type: "SCSS",
    level: 70,
  },
  {
    type: "Bootstrap",
    level: 65,
  },
]
const Empty = () => <React.Fragment />

const SkillBar =
  typeof window !== `undefined` ? require("react-skillbars").default : Empty

const HardSkills = () => (
  <section id="hard" className="wrapper style3 fade-up">
    <div className="inner">
      <h1 class="major">Hard Skills</h1>
      {typeof window !== `undefined` && (
        <React.Fragment>
          <h2>JavaScript</h2>
          <SkillBar skills={SKILLS1} height={50} animationDelay={100} />
          <h2>PHP</h2>
          <SkillBar skills={SKILLS2} height={50} animationDelay={100} />
          <h2>Other Web Stuff</h2>
          <SkillBar skills={SKILLS3} height={50} animationDelay={100} />
        </React.Fragment>
      )}
    </div>
  </section>
)

export default HardSkills
