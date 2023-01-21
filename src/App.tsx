import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

import "./App.css";
import { useEffect } from "react";
import { threemain } from "./threemain";

function App() {
  useEffect(() => {
    threemain();
  }, []);

  return (
    // <Router>
    //   <Navbar />

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
    <>
      <canvas id="bg"></canvas>
        <Navbar />
      <main>

        <Home />
      </main>
    </>
  );
}

export default App;
