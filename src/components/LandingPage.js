import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CoursesSwiper from "./CoursesSwiper";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoursesSwiper />
      <Footer />
    </div>
  );
};

export default LandingPage;
