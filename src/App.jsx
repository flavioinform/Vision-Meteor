import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentacion from "./pages/Documentacion";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0A192F] min-h-screen">
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentacion" element={<Documentacion />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
