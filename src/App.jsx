import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Vision from "./Pages/Vision";
import Donation from "./Pages/Donation";
import Event from "./Pages/Event";
import EventDetail from "./Pages/EventDetail";


const App = () => {
  return (
    <Router>
      
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/vision" element={<Vision/>} />
          <Route path="/donation" element={<Donation/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </div>
    
    </Router>
  );
};

export default App;
