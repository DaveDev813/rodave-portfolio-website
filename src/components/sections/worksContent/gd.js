import React from "react"

const Gd = () => (
  <React.Fragment>
    <h2 class="major">
      <a href="https://www.sierralabs.com/">Green Direct</a>
    </h2>
    <h3>About</h3>
    <ul>
      <li>
        Developed GreenDirect Mobile Driver Application for legal medical
        marijuana in the US using React-native, typescript and Apollo GraphQL
        for data management.
      </li>
      <li>
        System maintenance and bug fixing on GreenDirect CMS, Website and API
        using Angular 6 and NestJS.
      </li>
    </ul>
    <h3>Description</h3>
    <p>
      Green Direct is a community where businesses and consumers can search and
      discover cannabis products, become educated on all things cannabis, review
      cannabis businesses and connect with other like-minded users. Businesses
      can list their services and user can register for FREE.
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
            <td>NestJS</td>
            <td>Backend nodejs framework for developing REST API</td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td>For database</td>
          </tr>
          <tr>
            <td>React Native + TypeScript</td>
            <td>Mobile application for customers and Drivers application</td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>
              Application statemanagement for the customer's mobile application
            </td>
          </tr>
          <tr>
            <td>React Apollo</td>
            <td>
              API handler, state management and graphQL handler for driver
              application
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
)

export default Gd
