import React from "react"
import "../styles/footer.css"

const Footer = () => {
  return (
    <>
      <div className="socials">
        <div className="item">
          <i class="fa-brands fa-facebook-f fa-3x icons"></i>
          <h4>Facebook</h4>
          <p>@ddhub</p>
          <a href="">Follow Us</a>
        </div>

        <div className="item">
          <i class="fa-brands fa-instagram fa-3x icons" />
          <h4>Instagram</h4>
          <p>@ddhub</p>
          <a href="">Follow Us</a>
        </div>

        <div className="item">
          <i class="fa-brands fa-linkedin fa-3x icons"></i>
          <h4>Linkedin</h4>
          <p>@ddhub</p>
          <a href="">Join Us</a>
        </div>

        <div className="item">
          <i class="fa-brands fa-twitter fa-3x icons"></i>
          <h4>Twitter</h4>
          <p>@ddhub</p>
          <a href="">Follow Us</a>
        </div>
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
        <div className="back-to-top">
          <a href="#">Back to Top</a>
        </div>
      </div>
    </>
  )
}

export default Footer
