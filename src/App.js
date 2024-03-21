import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Gallary from "./Pages/Gallary";
import PriceList from "./Pages/PriceList";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallary" element={<Gallary />} />
        <Route path="/PriceList" element={<PriceList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
