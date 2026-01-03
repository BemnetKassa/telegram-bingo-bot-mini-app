import { useState } from "react";

import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import { generateBingoCard } from "./utils/bingo";
import "./index.css";

function App() {
  const [screen, setScreen] = useState("landing");
  const [board, setBoard] = useState(generateBingoCard());
  const [marked, setMarked] = useState({});

  const startGame = () => {
    setBoard(generateBingoCard());
    setMarked({});
    setScreen("game");
  };

  const toggleMark = (key) => {
    setMarked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetGame = () => {
    setBoard(generateBingoCard());
    setMarked({});
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      {screen === "landing" && (
        <LandingPage onStart={startGame} />
      )}

      {screen === "game" && (
        <GamePage
          board={board}
          marked={marked}
          onToggle={toggleMark}
          onReset={resetGame}
        />
      )}
    </div>
  );
}

export default App;
