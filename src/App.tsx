import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import "./App.css";
import { useEffect } from "react";
import { threemain } from "./threemain";

function App() {
  useEffect(() => {
    threemain();
  }, []);

  return (
    <>
      <canvas id="bg"></canvas>
      <main>
        <div className="main">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
