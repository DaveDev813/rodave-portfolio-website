import React from "react"
import SoftSkills from "../components/sections/softSkills"
import Footer from "../components/layout/footer"
import SideBar from "../components/layout/sideBar"
import Intro from "../components/sections/intro"
import HardSkills from "../components/sections/hardSkills"
import Proff from "../components/sections/proff"

import "../sass/main.scss"
import "../css/fontawesome-all.min.css"
import "../css/noscript.css"
import SEO from "../components/seo"
import Construction from "../components/sections/construction"
import Seminars from "../components/sections/seminars"
import Works from "../components/sections/works"

// https://html5up.net/hyperspace

const IndexPage = () => (
  <div className="main-container">
    <SEO />
    <SideBar />
    <div id="wrapper">
      <Works />
      {/* <Intro />
      <SoftSkills />
      <HardSkills />
      <Proff />
      <Seminars />
      <Construction /> */}
    </div>
    <Footer />
  </div>
)

export default IndexPage
