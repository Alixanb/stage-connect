import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ExperiencePage from "./experience/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
