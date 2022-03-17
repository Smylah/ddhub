import React from "react"
import "../styles/miniFooter.css"

const MiniFooter = () => {
  return (
    <>
      <div className="socials-container">
        <a href="">
          <i class="fa-brands fa-facebook-f fa-2x icons"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram fa-2x icons" />
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin fa-2x icons"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter fa-2x icons"></i>
        </a>
      </div>

      <div className="footer">
        <div>
          <div className="copywright">
            <span>&#169;</span> DDHub. All rights reserved
          </div>
        </div>
        <div className="links">
          <div className="terms">
            <a href="#">Terms and Conditions</a>
          </div>

          <div className="privacy">
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniFooter
