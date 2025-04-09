import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExperiencePage from "./experience/page";

import Home from "./hompage/Home";
import "./index.css";
import Contact from "./contact/Contact";
import AboutUs from "./about/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Routes>
    </BrowserRouter>
  )
}
