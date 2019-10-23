import React from "React"

const SideBar = () => (
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
            <a href="#hard">Hard Skills</a>
          </li>
          <li>
            <a href="#three">Professional Experience</a>
          </li>
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

export default SideBar
