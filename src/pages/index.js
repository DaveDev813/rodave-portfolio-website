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
        <div className="inner">
          <div className="inner">
            <h2>Soft Skills</h2>
            <blockquote>
              Good code is its own best documentation. As you're about to add a
              comment, ask yourself, "How can I improve the code so that this
              comment isn't needed?" Improve the code and then document it to
              make it even clearer. - someone from the internet
            </blockquote>
            <div className="features">
              <section>
                <span className="icon solid major fa-thumbs-up" />
                <h3>Decision making</h3>
                <p>
                  Possesses outstanding decision making and problem solving
                  skills.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-glasses" />
                <h3>Attention to detail</h3>
                <p>
                  Great attention to detail and concern for quality of projects,
                  codes and accuracy of data.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-fire" />
                <h3>Passion</h3>
                <p>
                  I have the passion in learning new technologies and trends
                  which I adapt to help and improve my projects.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-grin-stars" />
                <h3>Dedication</h3>
                <p>
                  I am self-directed, self-motivated, and work great within a
                  team.
                </p>
              </section>
              <section>
                <span className="icon solid major fa-link" />
                <h3>Communication</h3>
                <p>
                  Possess great communication skills and interpersonal skills
                  specially in coordinating with team members, and can provide
                  adequate documentation on projects.
                </p>
              </section>
              <section>
                <span className="icon major fa-gem" />
                <h3>Resilience</h3>
                <p>Can work under pressure with minimal supervision.</p>
              </section>
            </div>
          </div>
        </div>
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
