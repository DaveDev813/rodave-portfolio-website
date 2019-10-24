import React from "React"
import Fade from "react-reveal/Fade"
const SideBar = () => {
  let delay = 400
  const incrimentDelay = (init = false) => {
    delay = init ? delay : delay + 200
    return delay
  }
  return (
    <section id="sidebar">
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
                <a href="#three">Professional Experience</a>
              </li>
            </Fade>
            <Fade ssrFadeout delay={incrimentDelay()}>
              <li>
                <a href="#seminar">Seminars Attended</a>
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

export default SideBar
