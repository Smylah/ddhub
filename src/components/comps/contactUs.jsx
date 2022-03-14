import React from "react"
import "../styles/contactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-box">
      <div className="man-typing" />
      <div>
        <div className="send-us">Send us a message</div>
        <div className="contact">
          <form action="/action_page.php">
            <label style={{ marginTop: "32px" }} for="fname">
              Name
            </label>
            <input type="text" id="name" name="name" />

            <label for="email">Email</label>
            <input type="text" id="email" name="email" />

            <label for="message">Message</label>
            <input type="textarea" id="message" name="message" />

            <input type="submit" value="Send message" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
