import React from "react"

const Qm = () => (
  <React.Fragment>
    <h2 class="major">The Queen Mary</h2>
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
