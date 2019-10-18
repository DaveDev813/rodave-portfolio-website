import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const Footer = () => (
  <React.Fragment>
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
  </React.Fragment>
)

export default Footer
