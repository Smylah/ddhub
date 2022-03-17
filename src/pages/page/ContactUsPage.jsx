import React from "react"
import ContactForm from "../../components/comps/contactForm"
import ContactUs from "../../components/comps/contactUs"
import Footer from "../../components/comps/footer"
import Navbar from "../../components/comps/navbar"

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <ContactForm />
      <Footer />
    </>
  )
}

export default ContactUsPage
