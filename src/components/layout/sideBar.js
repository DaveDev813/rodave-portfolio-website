import React from "React"
import Fade from "react-reveal/Fade"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { slide as Menu } from "react-burger-menu"

const SideBarContent = ({ isMobile = "", close }) => {
  let delay = 400
  const incrimentDelay = (init = false) => {
    delay = init ? delay : delay + 200
    return delay
  }
  return (
    <section id="sidebar" className={isMobile}>
      <div className="inner">
        <nav>
          <ul>
            <Fade ssrFadeout delay={incrimentDelay(true)}>
              <li>
                <a href="#intro">Welcome</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#one">Soft Skills</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#hard">Hard Skills</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#three">Experience</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#works">Works</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#seminar">Seminars</a>
              </li>
            </Fade>

            {/* <li>
            <a href="#three">Seminars Attended</a>
          </li>
          <li>
            <a href="#three">My craft</a>
          </li>
          <li>
            <a href="#three">Education</a>
          </li> */}
          </ul>
        </nav>
      </div>
    </section>
  )
}

const SideBar = () => {
  const matches = useMediaQuery("(max-width: 481px)")
  if (matches) {
    return (
      <Menu right isOpen={false}>
        <SideBarContent isMobile="mobile" />
      </Menu>
    )
  }
  return <SideBarContent />
}

export default SideBar
