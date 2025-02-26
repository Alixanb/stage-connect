import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Experience from './experience/Experience'
import Footer from './Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
