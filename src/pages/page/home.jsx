import React from "react"
import Body from "../../components/comps/body"
import ContactForm from "../../components/comps/contactForm"
import ContactUs from "../../components/comps/contactUs"
import Footer from "../../components/comps/footer"
import MiniFooter from "../../components/comps/miniFooter"
import Navbar from "../../components/comps/navbar"
import ThankYou from "../../components/comps/thankYou"
import "../styles/home.css"
const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      {/* <ContactUs /> */}
      {/* <ContactForm /> */}
      {/* <ThankYou /> */}
      <Footer />
      {/* <MiniFooter /> */}
    </>
  )
}
export default Home
