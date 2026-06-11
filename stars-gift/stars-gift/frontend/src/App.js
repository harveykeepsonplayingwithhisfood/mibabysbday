import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { Intro } from "./components/Intro";
import { Starfield } from "./components/Starfield";
import { StarCard } from "./components/StarCard";
import { Progress } from "./components/Progress";
import { FinalMessage } from "./components/FinalMessage";
import { SpotifyPlayer } from "./components/SpotifyPlayer";
import { STARS } from "./data/stars";

function App() {
  const [stage, setStage] = useState("intro"); // intro | sky
  const [activeStar, setActiveStar] = useState(null);
  const [discovered, setDiscovered] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  const handleStarClick = (star) => {
    setActiveStar(star);
    setDiscovered((prev) =>
      prev.includes(star.id) ? prev : [...prev, star.id],
    );
  };

  const handleClose = () => setActiveStar(null);

  useEffect(() => {
    if (
      stage === "sky" &&
      discovered.length === STARS.length &&
      !activeStar &&
      !showFinal
    ) {
      const t = setTimeout(() => setShowFinal(true), 900);
      return () => clearTimeout(t);
    }
  }, [discovered, activeStar, stage, showFinal]);

  return (
    <div className="App relative w-full min-h-screen bg-[#030408] text-slate-100 overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <Intro key="intro" onEnter={() => setStage("sky")} />
        )}
      </AnimatePresence>

      {stage === "sky" && (
        <>
          <Starfield
            onStarClick={handleStarClick}
            discoveredIds={discovered}
          />
          <Progress discoveredIds={discovered} />
          <SpotifyPlayer />
          <StarCard star={activeStar} onClose={handleClose} />
          <AnimatePresence>
            {showFinal && (
              <FinalMessage onClose={() => setShowFinal(false)} />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
