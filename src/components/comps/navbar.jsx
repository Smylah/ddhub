import React from "react"
import { Link } from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">
        lo<span style={{ color: "grey" }}>go</span>
      </div>
      <div className="menu">
        <div>
          <ul className="nav">
            <li>
              <Link className="a" to="/ddhub/">
                Home
              </Link>
            </li>
            <li>
              <Link className="a" to="/ddhub/services">
                services
              </Link>
            </li>
            <li className="extra-padding">
              <Link className="a" to="/ddhub/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="hire-us">
            <li>
              <Link className="a" to="/ddhub/pricing">
                Hire Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mobile-nav">
      <div className="logo">
        lo<span style={{ color: "grey" }}>go</span>
      </div>
    </div>
  </nav>
)

export default Navbar
