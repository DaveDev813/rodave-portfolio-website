import React from "react"
import Avatar from "react-avatar"
const Intro = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <Avatar
      className="avatar"
      src="/images/avatar.png"
      size="200"
      round={true}
      alt="full-stack software developer Rodave Joseph Bobadilla"
    />
    <div className="inner">
      <h1 style={{ margin: 0 }}>Rodave Joseph B. Bobadilla</h1>
      <h2>Full-stack Software Engineer</h2>
      <p>
        Seeking a challenging career with a progressive organization that
        provides an opportunity to capitalize my technical skills & abilities in
        the field of web application development.
      </p>
      <ul className="actions">
        <li>
          <a
            href="https://drive.google.com/file/d/1gdIWnGb5Xp8v2ffhOv3FvGazcvYxGTzL/view?usp=sharing"
            className="button icon solid fa-download"
          >
            Download resume
          </a>
        </li>
      </ul>
    </div>
  </section>
)

export default Intro
