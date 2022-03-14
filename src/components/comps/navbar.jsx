import React from "react"
import "../styles/navbar.css"

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo">
      lo<span style={{ color: "grey" }}>go</span>
    </div>
    <div className="menu">
      <div>
        <ul className="nav">
          <li>
            <a href="#">Home</a>{" "}
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li className="extra-padding">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="hire-us">
          <li>
            <a href="#">Hire Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
