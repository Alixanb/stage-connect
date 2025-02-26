import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "./experience/Experience";
import Home from "./hompage/Home";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  )
}
