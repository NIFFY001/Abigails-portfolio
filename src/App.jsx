import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Conts from "./pages/Conts";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="conts" element={<Conts />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
