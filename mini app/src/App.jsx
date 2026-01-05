import { useState } from "react";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import { generateBingoCard } from "./utils/bingo";
import { useTelegram } from "./hooks/useTelegram";
import "./index.css";

function App() {
  const { user, isReady } = useTelegram();

  const [screen, setScreen] = useState("landing");
  const [board, setBoard] = useState(generateBingoCard());
  const [marked, setMarked] = useState({});

  if (!isReady) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading user info...
      </div>
    );
  }

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
        <LandingPage user={user} onStart={startGame} />
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
