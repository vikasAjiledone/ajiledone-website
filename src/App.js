import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Footer from './components/Footer'
import Contactus from "./pages/Contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
