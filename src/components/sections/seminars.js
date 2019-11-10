import React from "react"
import ModalVideo from "react-modal-video"
import Fade from "react-reveal/Fade"
import "react-modal-video/scss/modal-video.scss"

const SeminarItem = ({
  videoId,
  img,
  imgAlt = "",
  title,
  desc,
  learnMore,
  date = "",
}) => {
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
      <Fade up ssrFadeout>
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
            <h2 style={{ marginBottom: 0 }}>{title}</h2>
            <h3>{date}</h3>
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
      </Fade>
    </section>
  )
}

const Seminars = () => {
  //  videoId, img, imgAlt = "", title, desc, learnMore }
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
        date="June 22, 2019"
        videoId="Fa2IO6A7KjE"
        img="images/deeevcon.png"
        title="DevCon Summit 2019"
        desc="The Future of Jobs, Embracing Industry 4.0”. The Summit is a platform for developers and industry leaders to hear insightful keynote speakers, see unique exhibits, and experience highly curated sessions that are designed for the Filipino computer"
        learnMore="https://summit.devcon.ph"
      />

      <SeminarItem
        date="October 14, 2017"
        videoId="KEHrJenQOa0"
        img="images/gdg.png"
        title="GDG DevFest Philippines 2017"
        desc="Transforming the skills of every Filipino developer to a world-class talent, GDG Philippines invited experts
in Android, Web, and Cloud technologies to impart knowledge to our participants in a series of
workshops and sessions."
        learnMore="https://www.meetup.com/gdgphilippines/events/243705245/"
      />

      <SeminarItem
        date="May 20, 2017 – May 21, 2017"
        videoId="RhvkLCTcZMY"
        img="images/uxph.jpg"
        title="UX Philippines Conference 2017"
        desc="UX Design Conference for Filipinos in the Asian region."
        learnMore="https://metromanila.platinumlist.net/event/49824/ux-philippines-conference-2017-design-for-a-better-philippines"
      />
    </section>
  )
}

export default Seminars
