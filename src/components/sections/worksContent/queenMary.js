import React from "react"

const Qm = () => (
  <React.Fragment>
    <h2 class="major">
      <a href="https://www.queenmary.com ">The Queen Mary</a>
    </h2>
    <h3>About</h3>
    <p>
      Developed <a href="https://www.queenmary.com ">The Queen Mary website</a>,
      a hotel marketing and booking website using jQuery, PHP Processwire as CMS
      (in production) in coordination with project managers in the US and
      quality assurance.
    </p>
    <h3>Description</h3>
    <p>
      The historic Queen Mary is home to a 343-room Art Deco Hotel, where guests
      relive the excitement of cruising in the style of the 1930's without ever
      leaving port.
    </p>
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
            <td>
              <a href="https://processwire.com/">ProcessWire</a>
            </td>
            <td>A PHP Content management system framework for backend.</td>
          </tr>
          <tr>
            <td>PHP</td>
            <td>Backend API</td>
          </tr>
          <tr>
            <td>JQuery</td>
            <td>For frontend javascript library.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
)

export default Qm
