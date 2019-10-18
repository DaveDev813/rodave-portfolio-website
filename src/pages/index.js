import React from "react"
// import "../css/fontawesome-all.min.css"
import "../sass/main.scss"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SkillBar from "react-skillbars"
import "../css/fontawesome-all.min.css"
import "../css/noscript.css"
import SoftSkills from "../components/sections/softSkills"
import Footer from "../components/layout/footer"
import SideBar from "../components/layout/sideBar"
import Intro from "../components/sections/intro"
import HardSkills from "../components/sections/hardSkills"
import Proff from "../components/sections/proff"

// https://html5up.net/hyperspace

const IndexPage = () => (
  <div>
    <SideBar />
    <div id="wrapper">
      <Intro />
      <SoftSkills />
      <HardSkills />
      <Proff />
    </div>
    <Footer />
  </div>
)

export default IndexPage
