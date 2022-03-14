import React from "react"
import "../styles/thankYou.css"

const ThankYou = () => {
  return (
    <>
      <div className="thankyou-container">
        <h1>Thank you for choosing us</h1>
        <p>
          We are here to break boundaries and make the impossible possible for
          you! Get in touch with us or kindly request a free consultation or an
          instant quote through our contact form.
        </p>
      </div>
      <div className="forms-container">
        <div className="forms">
          <div className="h4">
            What is your <span>Budget</span>
          </div>
          <div className="budget-container">
            <input
              type="text"
              id="starting-budget"
              name="starting-budget"
              placeholder="$100"
            />
            <div> _ </div>
            <input
              type="text"
              id="Ending-budget"
              name="Ending-budget"
              placeholder="$500"
            />
          </div>
          <p>Input your budget range</p>
        </div>
        <div className="forms">
          <div className="h4">
            Your <span>E - mail address</span>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@example.com"
          />
          <p>Input your email address so we can contact you</p>
        </div>
        <div className="forms">
          <div className="h4">
            What <span>service</span> do you require?
          </div>
          <input type="text" id="name" name="name" placeholder="UI Design" />
          <p>UI Design, Web development, consultation, others, etc...</p>
        </div>
      </div>
      <div className="send-container">
        <a href="#">send</a>
      </div>
    </>
  )
}

export default ThankYou
