import React from "react"
import "../styles/contactForm.css"

const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <form>
          <div>
            <label for="email">Email</label>
            <input
              className="envelope"
              type="text"
              id="email"
              name="email"
              placeholder="someone@example.com"
            />
          </div>

          <div>
            <label for="phone">Phone</label>
            <input
              className="phone"
              type="text"
              id="phone"
              name="phone"
              placeholder="+2348123456789"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
