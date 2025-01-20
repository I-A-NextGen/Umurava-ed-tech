import React from "react";
import Navbar from "../_components/Navbar";
import HomeHero from "../_components/Home/HomeHero";

const page = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeHero/>
      </main>
    </>
  );
};

export default page;
