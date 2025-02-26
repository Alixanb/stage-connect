import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Header } from "../components/Header";
import Experience from './Experience';
import ThePerformer from "./ThePerformer";

const Home: React.FC = () => {
  return (
    <div className="p-16">
      <Header />
      <AboutUs />
      <Experience />
      <ThePerformer />
    </div>
  )
}

export default Home
