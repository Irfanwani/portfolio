import "./App.css";
import Home from "./pages/home";
import Exp from "./pages/exp";
import { useEffect } from "react";
import { threemain } from "./three/threemain";
import Skills from "./pages/skills";
import Links from "./pages/links";
import Footer from "./pages/footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  useEffect(() => {
    threemain();
  }, []);

  return (
    <>
      <canvas id="bg"></canvas>
      <main>
        <div className="sections-container">
          <Home />
          <Exp />
          <Skills />
          <Links />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
