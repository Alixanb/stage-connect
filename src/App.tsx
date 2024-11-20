import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Experience from "./experience/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
