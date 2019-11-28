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
  </React.Fragment>
)
export default FbChat
