import React from "react"

const Holli = () => (
  <React.Fragment>
    <h2 class="major">
      <a href="https://holliblu.com">Holliblu</a>
    </h2>
    <h3>About</h3>
    <p>
      System maintenance and bug fixing on
      <a href="https://holliblu.com">Holliblu</a>a nursing portal using Angular
      as front end and NestJS as backend
    </p>
    <h3>Description</h3>
    <p>
      If you are a Healthcare Company, our web-based platform makes nurse
      staffing and recruitment SIMPLE! Need an Oncology nurse, who speaks
      spanish, can do PICC line care and lives within 20 miles of a desired zip
      code? HOLLIBLU can help! Our state-of-the-art technology is nurse focused
      and employer approved; when nurses thrive, so do you! If you are a Nurse,
      HOLLIBLU is building a vibrant community where nurses THRIVE. Our iPhone
      and Android apps will help you create your comprehensive nurse profile,
      which can easily convert to a resume that can be shared by text, email and
      more. You can either use the app to just organize your professional life
      or you can feel free to expand your professional network by connecting
      with companies near you. Once connected, companies can send you gigs so
      you can get your side hussle on! HOLLIBLU puts the power back in your
      hands.
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
            <td>Angular 6</td>
            <td>Frontend development</td>
          </tr>
          <tr>
            <td>PUG</td>
            <td>Clean HTML templating</td>
          </tr>
          <tr>
            <td>NestJS</td>
            <td>Backend nodejs framework for developing REST API</td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td>For database</td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
)

export default Holli
