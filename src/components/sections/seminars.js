import React from "react"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

const Seminars = () => {
  const [yt1, setYt1] = React.useState(false)
  return (
    <section id="seminar" className="wrapper style2 spotlights">
      <section>
        <ModalVideo
          channel="youtube"
          isOpen={yt1}
          videoId="Fa2IO6A7KjE"
          onClose={() => setYt1(false)}
        />
        <img
          onClick={() => setYt1(true)}
          className="image"
          src="images/deeevcon.png"
          alt=""
          data-position="center center"
        />
        <div className="content">
          <div className="inner">
            <h2>DevCon Summit 2019</h2>
            <p>
              The Future of Jobs, Embracing Industry 4.0”. The Summit is a
              platform for developers and industry leaders to hear insightful
              keynote speakers, see unique exhibits, and experience highly
              curated sessions that are designed for the Filipino computer
              programmers.
            </p>
            <ul className="actions">
              <li>
                <a href="https://summit.devcon.ph" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section>
        <a href="#" className="image">
          <img src="images/pic02.jpg" alt="" data-position="top center" />
        </a>
        <div className="content">
          <div className="inner">
            <h2>Feugiat consequat</h2>
            <p>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
              turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
            </p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <a href="#" className="image">
          <img src="images/pic03.jpg" alt="" data-position="25% 25%" />
        </a>
        <div className="content">
          <div className="inner">
            <h2>Ultricies aliquam</h2>
            <p>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
              turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
            </p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <a href="#" className="image">
          <img src="images/pic03.jpg" alt="" data-position="25% 25%" />
        </a>
        <div className="content">
          <div className="inner">
            <h2>Ultricies aliquam</h2>
            <p>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
              turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.
            </p>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </section>
  )
}

export default Seminars
