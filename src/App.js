import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GlobheApp from "./pages/GlobheApp";
import Resume from "./pages/Resume";
// import ReactGA from "react-ga";
// import TagManager from "react-gtm-module";
// import RouteMiddleware from "./RouteMiddleware";

const App = () => {
  // useEffect(() => {
  //   // Initialize Google Analytics with your Tracking ID
  //   ReactGA.initialize("G-P1FLJZ7FZ9");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  //   TagManager.initialize({
  //     gtmId: "G-M3XXNGRW2H",
  //   });
  // }, []);
  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    });
  }, [location]);

  return (
    <HashRouter>
      <Routes>
        {/* <RouteMiddleware
          path="/"
          title="Projects"
          element={<LandingPage />}
          exact
        />
        <RouteMiddleware path="/about" element={<About />} title="About me" />{" "}
        <RouteMiddleware
          path="/contact"
          title="Contact me"
          element={<Contact />}
        />{" "}
        <RouteMiddleware
          path="/globhe-app"
          title="GLOBHE app"
          element={<GlobheApp />}
        />{" "}
        <RouteMiddleware
          path="/my-resume"
          title="My resume"
          element={<Resume />}
        /> */}
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
      </Routes>
    </HashRouter>
  );
};
export default App;
