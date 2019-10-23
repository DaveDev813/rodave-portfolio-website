import React from "React"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Avatar from "react-avatar"

const Proff = () => (
  <section id="three" className="wrapper style1 fade-up proff">
    <div className="inner">
      <h1 class="major">Professional Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="November 20, 2017 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Avatar src="/images/isbx.png" size="60" round={true} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">
            <a href="https://www.isbx.com/">ISBX Philippines Inc.</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a href="https://hackernoon.com/6-essential-tips-on-how-to-become-a-full-stack-developer-1d10965aaead">
              Full-stack Software Developer
            </a>
          </h4>
          <p>
            2501-B West Tower Philippine Stock Exchange Rd. Ortigas Center Pasig
            City, Metro Manila 1605
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 24, 2015 – November 17, 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Avatar
              src="/images/nuevasys.png"
              size="60"
              round={true}
              alt="full-stack software developer Rodave Joseph Bobadilla"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            <a href="http://nuevasys.ph/">Nuevasys Inc.</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Php Developer</h4>
          <p>
            23rd L-M, Burgundy Corporate Tower, 252 Sen. Gil Puyat Avenue,
            Makati City, Philippines
          </p>

          <p>
            <i>
              Front end developer under the Player Site Team. I was transferred
              from Leekie Enterprise because of the separation of the software
              development and IT team and became one company.
            </i>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 24, 2015 – November 17, 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={
            <Avatar src="/images/leekie.png" size="60" round={true} alt="" />
          }
        >
          <h3 className="vertical-timeline-element-title">
            <a href="http://www.leekie.com/">Leekie Enterprise Inc.</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Php Developer</h4>
          <p>
            23rd L-M, Burgundy Corporate Tower, 252 Sen. Gil Puyat Avenue,
            Makati City, Philippines
          </p>

          <p>
            <i>Backend developer under the API Team.</i>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 7, 2014 – July 17, 2014"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Avatar src="/images/wc.jpg" size="60" round={true} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">
            <a href="https://weleadcomtech.wordpress.com">We Lead Comtech</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Web Application Developer (OJT)
          </h4>
          <p>
            2102 Galleria Corporate Center EDSA cor Ortigas Avenue Quezon City,
            Philippines
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 24, 2012 – June 24, 2012"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Avatar src="/images/tp.png" round={true} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">
            <a href="http://www.teleperformance.ph/en-us/">Teleperformance</a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Technical Support Representative
          </h4>
          <p>
            EDSA Central IT Center 2 United St., Cor. EDSA, Greenfield District
            Mandaluyong City 1554, Philippines
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </section>
)

export default Proff
