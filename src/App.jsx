import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Vision from "./Pages/Vision";
import Contribute from "./Pages/Contribute";


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
          <Route path="/contribute" element={<Contribute/>} />
        </Routes>
      </div>
    
    </Router>
  );
};

export default App;
