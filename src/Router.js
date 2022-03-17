import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContactUsPage from "./pages/page/ContactUsPage"
import Home from "./pages/page/home"
import Pricing from "./pages/page/pricing"
import Services from "./pages/page/services"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ddhub/" element={<Home />} />
          <Route path="/ddhub/services" element={<Services />} />
          <Route path="/ddhub/contactus" element={<ContactUsPage />} />
          <Route path="/ddhub/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
