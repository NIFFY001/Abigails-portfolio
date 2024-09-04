import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Conts from "./pages/Conts";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="conts" element={<Conts />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
