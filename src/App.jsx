import React, { useLayoutEffect, useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Provider } from "react-redux"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import store from "./store/store"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Event from "./Pages/Event"
import EventDetail from "./Pages/EventDetail"
import Contact from "./Pages/Contact"
import Donation from "./Pages/Donation"
import Loader from "./Components/Loader"
import Vision from "./Pages/Vision"
import DonationCauses from "./Pages/DonationCauses"
import DirectDonation from "./Pages/DirectDonation"
import DonationDetail from "./Pages/DonationDetail"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const PageWrapper = ({ children }) => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this value to control how long the loader is shown

    return () => clearTimeout(timer)
  }, [location]) // Re-run effect when location changes

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  )
}

const App = () => {
  useLayoutEffect(() => {
    // GSAP default configuration
    gsap.config({
      autoSleep: 60,
      force3D: true,
      nullTargetWarn: false,
    })

    // Default GSAP settings
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    })
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event" element={<Event />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/donation-causes" element={<DonationCauses />} />
          <Route path="/direct-donation" element={<DirectDonation />} />
          <Route path="/donation/:id" element={<DonationDetail />} />

          </Routes>
        </PageWrapper>
      </Router>
    </Provider>
  )
}

export default App

