import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const Footer = () => (
  <React.Fragment>
    {/* Footer */}
    <footer id="footer" className="wrapper style1-alt">
      <div className="inner">
        <ul className="menu">
          <li>© Portfolio by Rodave. All rights reserved.</li>
        </ul>
      </div>
    </footer>
    {/* Scripts */}
    <Helmet>
      {/* <script
        async
        defer
        src={withPrefix("js/jquery.min.js")}
        type="text/javascript"
      />
      <script
        async
        defer
        src={withPrefix("js/jquery.scrollex.min.js")}
        type="text/javascript"
      />
      <script
        async
        defer
        src={withPrefix("js/jquery.scrolly.min.js")}
        type="text/javascript"
      />
      <script
        async
        defer
        src={withPrefix("js/browser.min.js")}
        type="text/javascript"
      />
      <script
        async
        defer
        src={withPrefix("js/breakpoints.min.js")}
        type="text/javascript"
      />
      <script
        async
        defer
        src={withPrefix("js/util.js")}
        type="text/javascript"
      /> */}
      <script
        async
        defer
        src={withPrefix("js/compressed.js")}
        type="text/javascript"
      />
    </Helmet>
  </React.Fragment>
)

export default Footer
