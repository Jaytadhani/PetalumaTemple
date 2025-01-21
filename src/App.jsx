import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <Router>
        <Navbar />
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
