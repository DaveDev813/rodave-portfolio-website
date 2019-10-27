import React from "react"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

const SeminarItem = ({ videoId, img, imgAlt = "", title, desc, learnMore }) => {
  const [yt1, setYt1] = React.useState(false)
  return (
    <section>
      {videoId && (
        <ModalVideo
          channel="youtube"
          isOpen={yt1}
          videoId={videoId}
          onClose={() => setYt1(false)}
          youtube={{ autoplay: true }}
        />
      )}
      <div className="image" style={{ display: "flex" }}>
        <img
          className="thumbImage"
          src={img}
          alt={imgAlt}
          data-position="center center"
        />
      </div>
      <div className="content">
        <div className="inner">
          <h2>{title}</h2>
          <p>{desc}</p>
          <ul className="actions">
            {videoId && (
              <li>
                <button
                  className="button icon solid fa-play"
                  onClick={() => setYt1(true)}
                >
                  Play video
                </button>
              </li>
            )}
            <li>
              <a href={learnMore} className="button">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const Seminars = () => {
  const [yt1, setYt1] = React.useState(false)
  //  videoId, img, imgAlt = "", title, desc, learnMore }=
  return (
    <section id="seminar" className="wrapper style3 spotlights">
      {/* <section style={{ minHeight: "auto", width: "100%" }}>
        <div className="content" style={{ minHeight: "auto", width: "100%" }}>
          <div className="inner">
            <h1 class="major">Seminars Attended</h1>
          </div>
        </div>
      </section> */}

      <SeminarItem
        videoId="Fa2IO6A7KjE"
        img="images/deeevcon.png"
        title="DevCon Summit 2019"
        desc="The Future of Jobs, Embracing Industry 4.0”. The Summit is a platform for developers and industry leaders to hear insightful keynote speakers, see unique exhibits, and experience highly curated sessions that are designed for the Filipino computer"
        learnMore="https://summit.devcon.ph"
      />
    </section>
  )
}

export default Seminars
