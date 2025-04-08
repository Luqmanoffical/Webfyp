import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import SortingVisualizer from "./Virsulization";

const Home = () => {
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center overflow-x-hidden items-center">
      <Navbar />
      <div className="w-full max-w-4xl px-6 py-8 max-sm:px-0 ">
        <SortingVisualizer />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
