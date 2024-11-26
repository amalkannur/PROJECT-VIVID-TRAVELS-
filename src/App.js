import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';

import Home from "../src/pages/Home"
import About from "../src/pages/About"
import ContactUs from "../src/pages/ContactUs" 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Holidays from "./pages/Holidays";
import Visa from "./pages/Visa";


function App() {
  return (
    <div className="App ">
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
