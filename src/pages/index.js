import React from "react"

import Footer from "../components/layout/footer"
import SideBar from "../components/layout/sideBar"
import SEO from "../components/seo"
import FbChat from "../components/fbchat"

/** SECTIONS */
import Works from "../components/sections/works"
import Construction from "../components/sections/construction"
import Seminars from "../components/sections/seminars"
import Intro from "../components/sections/intro"
import HardSkills from "../components/sections/hardSkills"
import Proff from "../components/sections/proff"
import SoftSkills from "../components/sections/softSkills"

import "../sass/main.scss"

/**
 * Template: https://html5up.net/hyperspace
 */

const IndexPage = () => (
  <div className="main-container">
    <SEO />
    <SideBar />
    <div id="wrapper">
      <Intro />
      <SoftSkills />
      <HardSkills />
      <Proff />
      <Works />
      <Seminars />
      <Construction />
    </div>
    <Footer />
    <FbChat />
  </div>
)

export default IndexPage
