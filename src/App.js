import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GlobheApp from "./pages/GlobheApp";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/globhe-app" element={<GlobheApp />} />
        <Route path="/my-resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};
export default App;
