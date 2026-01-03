import { useEffect } from "react";
import BingoBoard from "./BingoBoard";
import { countCompletedLines } from "../utils/checkWin";
import { playSound } from "../utils/sound";
import winSound from "../assets/sounds/win.mp3";

const BINGO = ["B", "I", "N", "G", "O"];

export default function GamePage({ board, marked, onToggle, onReset }) {
  const completedLines = countCompletedLines(marked);
  const hasWon = completedLines >= 5;

  // ✅ Play win sound when bingo is achieved
  useEffect(() => {
    if (hasWon && !window.__bingoWonPlayed) {
      playSound(winSound, 0.8);
      window.__bingoWonPlayed = true;
    }
  }, [hasWon]);

  return (
    <div className="relative bg-gray-800 p-6 rounded-xl w-96 space-y-4">
      {/* 🎯 BINGO Progress */}
      <div className="flex justify-center gap-2">
        {BINGO.map((letter, index) => (
          <div
            key={letter}
            className={`w-9 h-9 flex items-center justify-center rounded-full font-bold
              ${
                index < completedLines
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* 🎱 Bingo Board */}
      <BingoBoard
        board={board}
        marked={marked}
        onToggle={hasWon ? () => {} : onToggle}
      />

      {/* 🎮 Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            window.__bingoWonPlayed = false; // reset sound flag
            onReset();
          }}
          className="flex-1 bg-red-600 py-2 rounded-lg hover:bg-red-500"
        >
          Reset
        </button>

        <button
          className="flex-1 bg-blue-600 py-2 rounded-lg hover:bg-blue-500"
        >
          Share
        </button>
      </div>

      {/* 🏆 WIN MODAL */}
      {hasWon && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-xl">
          <div className="bg-gray-900 p-6 rounded-xl text-center space-y-4 animate-bounce">
            <h2 className="text-3xl font-bold text-green-500">
              🎉 BINGO!
            </h2>
            <p>You completed the board!</p>
            <button
              onClick={() => {
                window.__bingoWonPlayed = false; // reset sound flag
                onReset();
              }}
              className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
