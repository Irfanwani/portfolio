import "./App.css";
import Home from "./pages/home";
import Exp from "./pages/exp";

import "./App.css";
import { useEffect } from "react";
import { threemain } from "./threemain";
import Skills from "./pages/skills";

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
        </div>
      </main>
    </>
  );
}

export default App;
