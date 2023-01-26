import "./App.css";
import Home from "./pages/home";
import Exp from "./pages/exp";

import "./App.css";
import { useEffect } from "react";
import { threemain } from "./threemain";

function App() {
  useEffect(() => {
    threemain();
    window.scrollbars.visible
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
