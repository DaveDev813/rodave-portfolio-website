import React from "react"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import * as RevealFade from "react-reveal/Fade"
import "./card.scss"

const CardContent = ({
  img = "",
  title = "",
  desc = "",
  learn = "#",
  setOpen,
  show = false,
}) => {
  return (
    <div className="container">
      <div className={`card ${show ? "show" : ""}`}>
        <div className="card__image-container">
          <img className="card__image" src={img} alt="" />
        </div>
        <svg className="card__svg" viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#57959e"
          />
          <path
            className="card__line"
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth={3}
            fill="transparent"
          />
        </svg>
        <div className="card__content">
          <h1 className="card__title">{title}</h1>
          <p>{desc}</p>
          {setOpen && (
            <a className="button primary small" onClick={() => setOpen(true)}>
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Card = props => {
  const [open, setOpen] = React.useState(false)
  const [show, setShow] = React.useState(false)

  return (
    <React.Fragment>
      <RevealFade ssrFadeout delay={props.delay} onReveal={() => setShow(true)}>
        <CardContent {...props} setOpen={setOpen} show={show} />
      </RevealFade>

      <Modal
        disablePortal={true}
        className="modalWorks"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        onClose={() => setOpen(false)}
        disableAutoFocus={true}
      >
        <Fade in={open}>
          <div className="cardModal">
            <div
              className=" icon solid fa-times closeBtn"
              onClick={() => setOpen(false)}
            />
            {props.content ? (
              props.content()
            ) : (
              <React.Fragment>
                <h2 class="major">{props.title}</h2>
                <p>{props.desc}</p>
              </React.Fragment>
            )}
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}

export default Card
