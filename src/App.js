import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Art from "./pages/Art";

function App() {
  return (
    <div className="p-4 bg-black">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Projects />} />
          {/* <Route path="/connect" element={<Contact />} /> */}
          <Route path="/art" element={<Art />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
