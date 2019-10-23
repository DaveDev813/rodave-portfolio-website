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

// https://html5up.net/hyperspace

const IndexPage = () => (
  <div>
    <SEO />
    <SideBar />
    <div id="wrapper">
      <Intro />
      <SoftSkills />
      <HardSkills />
      <Proff />
      <Construction />
    </div>
    <Footer />
  </div>
)

export default IndexPage
