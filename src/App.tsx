import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Exp from "./pages/exp";
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
        <div className="main center column">
          <Home />
          <Exp />
        </div>
      </main>
    </>
  );
}

export default App;
