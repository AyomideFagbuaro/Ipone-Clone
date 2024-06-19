import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlight from "./Components/Highlight";
import Model from "./Components/Model";
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
