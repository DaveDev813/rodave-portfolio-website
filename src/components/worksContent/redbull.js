import React from "react"

const Redbull = () => (
  <React.Fragment>
    <h2 class="major">
      <a href="https://wingtips.redbull.com/">RedBull</a>
    </h2>
    <h3>About</h3>
    <p>
      Developed web applications for RedBull employees for ease of access and
      workflow.
    </p>
    <h3>Projects</h3>
    <ul>
      <li>Co-Pilot - Web application for managing company events.</li>
      <li>
        WingTips - Developed Redbull Wingtips using CakePHP. This application
        notifies employees on current Redbull events
      </li>
    </ul>
    <h3>Technologies Used</h3>
    <div className="table-wrapper">
      <table className="alt">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ReactJS + TypeScript</td>
            <td>Frontend development</td>
          </tr>
          <tr>
            <td>NestJS</td>
            <td>Backend nodejs framework for developing REST API</td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td>For database</td>
          </tr>
          <tr>
            <td>React Apollo</td>
            <td>API handler, state management and graphQL handler</td>
          </tr>
          <tr>
            <td>CakePHP</td>
            <td>Full web application framework with PHP</td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
)

export default Redbull
