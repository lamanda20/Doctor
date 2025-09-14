import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Location />
      <Testimonials />
    </>
  );
};

export default Home;
