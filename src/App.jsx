import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cont from "./pages/Cont";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cont" element={<Cont />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
