import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GlobheApp from "./pages/GlobheApp";
import Resume from "./pages/Resume";
import DevelopersPage from "./pages/DevelopersPage";

const PageTracker = () => {
  const params = useParams();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: `/${params["*"]}`,
      page_location: window.location.href,
    });
  }, [params]);

  return null;
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<PageTracker />} />

        <Route
          exact
          path="/"
          title="Rémy Ghalayini"
          element={<LandingPage />}
        />
        <Route path="/about" title="Contact me" element={<About />} />
        <Route path="/contact" title="Contact me" element={<Contact />} />
        <Route path="/globhe-app" title="GLOBHE app" element={<GlobheApp />} />
        <Route path="/my-resume" title="My resume" element={<Resume />} />
        <Route
          path="/developers-docs"
          title="Developers page"
          element={<DevelopersPage />}
        />
      </Routes>
    </HashRouter>
  );
};
export default App;
