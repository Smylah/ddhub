import React from "react"
import ContactForm from "./contactForm"
import "../styles/body.css"
import { Link } from "react-router-dom"

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="remote-gateway">
          <div className="remote-digital">
            <div className="r-d">
              <div className="padding">
                <div className="chart-img" />
                <div>Remote</div>
                <div>Digital</div>
              </div>
              <div className="gateway">Gateway</div>
            </div>
            <div className="laptop-img " />
          </div>

          <div className="text-container">
            <p>
              We are a digital creative hub specializing in valuable and
              sustainable brand experiences. Remotely, we have helped clients in
              Nigeria as well as, Internationals to find, build and share their
              purpose with a larger audience, digitally.
            </p>
            <br />
            <p>
              But that’s not all. When you work with us, expect complete
              transparency, strategic recommendations, and premium service
            </p>
          </div>
        </div>
        <div className="shredded-image" />
      </div>

      <div className="hire-container">
        <div className="hire-us-body">
          <Link className="a" to="/ddhub/pricing">
            Hire Us
          </Link>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="question-mark"></div>
        <div>
          <h1>Why Choose Us</h1>
          <p>
            We are here to break boundaries and make the impossible possible for
            you! Get in touch with us or kindly request a free consultation or
            an instant quote through our contact form.
          </p>
          <br />

          <a href="">Take me there</a>
        </div>
        <div className="question-mark"></div>
      </div>

      <div className="img-container">
        <div className="item">
          <div className="img-1" />
          <div className="card">
            <h6 style={{ color: "#107596" }}>UI Design</h6>
            <h2>Be part of the process, not just the end product</h2>
            <p>
              Collaborate with our professional team of designers to bring your
              thoughts out into the digital world. Your product, your rules
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="item">
          <div className="img-2" />
          <div className="card">
            <h6 style={{ color: "#DAA142" }}>Social Media</h6>
            <h2>Get the likes and the comments</h2>
            <p>
              Our social bees are constantly curating to come up with the best
              strategy for your social media/brand
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="item">
          <div className="img-3" />
          <div style={{ border: "none" }} className="card">
            <h6 style={{ color: "#27AE60" }}>Software Development</h6>
            <h2>Breathe life into digital products</h2>
            <p>
              We nurture your raw ideas with precision, care and absolute
              efficiency, delivering a product of peak quality, efficiency and
              the functionalities to last the test of time
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div className="other-services-container">
        <div className="other-services">
          <div className="h1">Other services</div>
          <p>Tap to make enquiries</p>
          <div className="services-container">
            <div>
              <div className="img-1" />
              <div className="service">
                <a href="">Content Creation</a>
              </div>
            </div>

            <div>
              <div className="img-2" />
              <div className="service">
                <a href="">Graphic Designing</a>
              </div>
            </div>

            <div>
              <div className="img-3" />
              <div className="service">
                <a href="">Video & Animation</a>
              </div>
            </div>

            <div>
              <div className="img-4" />
              <div className="service">
                <a href="">Digital Marketing</a>
              </div>
            </div>

            <div>
              <div className="img-5" />
              <div className="service">
                <a href="">Social Media Marketing</a>
              </div>
            </div>

            <div>
              <div className="img-6" />
              <div className="service">
                <a href="">Webiste Development</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="work-with-us">Work With us</div>
        <div className="nxt-lvl">
          Let us take your ideas and your brand to the next level
        </div>
      </div>
      <div className="hire-us-container">
        <a className="hire-us" href="">
          Hire us
        </a>
      </div>
      <div className="plug-container">
        <div className="plug" />
      </div>
      <div className="contact-us">Do you wanna Contact us?</div>

      <ContactForm />
    </>
  )
}

export default Body
