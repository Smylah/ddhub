import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContactUs from "./pages/page/ContactUs"
import Home from "./pages/page/home"
import Pricing from "./pages/page/pricing"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ddhub/" element={<Home />} />
          <Route path="/ddhub/contactus" element={<ContactUs />} />
          <Route path="/ddhub/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
