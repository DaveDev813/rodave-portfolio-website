import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const FbChat = () => (
  <React.Fragment>
    <div id="fb-root" />
    <div
      className="fb-customerchat"
      attribution="install_email"
      page_id="113663806739694"
    />
    <Helmet>
      <script
        async
        defer
        src={withPrefix("js/fbchat.js")}
        type="text/javascript"
      />
    </Helmet>
  </React.Fragment>
)
export default FbChat
