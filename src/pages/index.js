import React from "react"
// import "../css/fontawesome-all.min.css"
import "../sass/main.scss"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Avatar from "react-avatar"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SkillBar from "react-skillbars"
import "../css/fontawesome-all.min.css"
import "../css/noscript.css"
import SoftSkills from "../components/sections/softSkills"

// https://html5up.net/hyperspace

const SKILLS = [
  {
    type: "Java",
    level: 100,
  },
  {
    type: "React",
    level: 85,
  },
  {
    type: "Javascript",
    level: 75,
  },
  {
    type: "Spring",
    level: 50,
  },
  {
    type: "Docker",
    level: 25,
  },
  {
    type: "HTML",
    level: 20,
  },
  {
    type: "NoSQL",
    level: 0,
  },
]

const IndexPage = () => (
  <div>
    {/* Sidebar */}
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li>
              <a href="#intro">Welcome</a>
            </li>
            <li>
              <a href="#one">Soft Skills</a>
            </li>
            <li>
              <a href="#two">Hard Skills</a>
            </li>
            <li>
              <a href="#three">Professional Experience</a>
            </li>
            <li>
              <a href="#three">Seminars Attended</a>
            </li>
            <li>
              <a href="#three">My craft</a>
            </li>
            <li>
              <a href="#three">Education</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    {/* Wrapper */}
    <div id="wrapper">
      {/* Intro */}
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <Avatar
          className="avatar"
          src="/images/avatar.png"
          size="200"
          round={true}
          alt="full-stack software developer Rodave Joseph Bobadilla"
        />
        <div className="inner">
          <h1>Rodave Joseph B. Bobadilla</h1>
          <p>
            Seeking a challenging career with a progressive organization that
            provides an opportunity to capitalize my technical skills &
            abilities in the field of web application development.
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style3 fade-up">
        <SoftSkills />
      </section>
    </div>
    {/* Footer */}
    <footer id="footer" className="wrapper style1-alt">
      <div className="inner">
        <ul className="menu">
          <li>© Untitled. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </footer>
    {/* Scripts */}
    <Helmet>
      <script src={withPrefix("js/jquery.min.js")} type="text/javascript" />
      <script
        src={withPrefix("js/jquery.scrollex.min.js")}
        type="text/javascript"
      />
      <script
        src={withPrefix("js/jquery.scrolly.min.js")}
        type="text/javascript"
      />
      <script src={withPrefix("js/browser.min.js")} type="text/javascript" />
      <script
        src={withPrefix("js/breakpoints.min.js")}
        type="text/javascript"
      />
      <script src={withPrefix("js/util.js")} type="text/javascript" />
      <script src={withPrefix("js/main.js")} type="text/javascript" />
    </Helmet>
  </div>
)

export default IndexPage
