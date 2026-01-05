import { useEffect, useState } from "react";
import GamePage from "./components/GamePage";
import LandingPage from "./components/LandingPage";
import { generateBingoCard } from "./utils/bingo";
import "./index.css";

function App() {
  const [screen, setScreen] = useState("landing"); // landing | game
  const [board, setBoard] = useState([]);
  const [marked, setMarked] = useState([]);

  // 🎱 Start game
  const startGame = () => {
    const newBoard = generateBingoCard();
    setBoard(newBoard);
    setMarked(Array(25).fill(false));
    setScreen("game");
  };

  // ✅ Toggle cell
  const toggleMark = (index) => {
    setMarked((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  // 🔄 Reset game
  const resetGame = () => {
    setBoard(generateBingoCard());
    setMarked(Array(25).fill(false));
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
          onBack={() => setScreen("landing")}
        />
      )}
    </div>
  );
}

export default App;
