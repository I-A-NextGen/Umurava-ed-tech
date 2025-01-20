import React from "react";
import Navbar from "../_components/Navbar";
import HomeHero from "../_components/Home/HomeHero";
import Footer from "../_components/Footer";

const page = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeHero />
      </main>
      <>
        <Footer />
      </>
    </>
  );
};

export default page;
