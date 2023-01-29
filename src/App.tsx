import "./App.css";
import Home from "./pages/home";
import Exp from "./pages/exp";

import "./App.css";
import { useEffect } from "react";
import { threemain } from "./three/threemain";
import Skills from "./pages/skills";
import Links from "./pages/links";

function App() {
  useEffect(() => {
    threemain();
  }, []);

  return (
    <>
      <canvas id="bg"></canvas>
      <main>
        <div className="main center column">
          <Home />
          <Exp />
          <Skills />
          <Links />
        </div>
      </main>
    </>
  );
}

export default App;
