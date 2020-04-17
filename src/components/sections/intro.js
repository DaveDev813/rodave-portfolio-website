import React from "react"
import Avatar from "react-avatar"
import Fade from "react-reveal/Fade"
import ModalVideo from "react-modal-video"

const Intro = ({ hasResume = true }) => {
  let delay = 0
  const incrimentDelay = (init = false) => {
    delay = init ? delay : delay + 200
    return delay
  }
  const [open, setOpen] = React.useState(false)
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <Avatar
        className="avatar"
        src="/images/avatar.png"
        size="200"
        round={true}
        alt="full-stack software developer Rodave Joseph Bobadilla"
        onClick={() => setOpen(true)}
      />

      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="VUiexrOMfjA"
        onClose={() => setOpen(false)}
        youtube={{
          autoplay: 1,
          loop: 1,
          showinfo: 0,
          controls: 0,
          modestbranding: 1,
        }}
      />

      <div className="inner">
        <Fade up ssrFadeout>
          <h1 style={{ margin: 0 }}>Rodave Joseph B. Bobadilla</h1>
        </Fade>
        <Fade up ssrFadeout delay={incrimentDelay()}>
          <h2>Full-stack Software Engineer</h2>
        </Fade>
        <Fade up ssrFadeout delay={incrimentDelay()}>
          <p>
            Seeking a challenging career with a progressive organization that
            provides an opportunity to capitalize my technical skills &
            abilities in the field of web application development.
          </p>
        </Fade>
        <Fade up ssrFadeout delay={incrimentDelay()}>
          <ul className="actions">
            <li>
              {hasResume ? (
                <a
                  href="https://drive.google.com/file/d/1gdIWnGb5Xp8v2ffhOv3FvGazcvYxGTzL/view?usp=sharing"
                  className="button icon solid fa-download"
                >
                  Download resume
                </a>
              ) : (
                <a
                  className="button icon solid fa-download"
                  onClick={e => {
                    e.preventDefault()
                    alert("This is disabled for now")
                  }}
                >
                  Download resume
                </a>
              )}
            </li>
          </ul>
        </Fade>
      </div>
    </section>
  )
}

export default Intro
