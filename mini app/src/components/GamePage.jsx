import BingoBoard from "./BingoBoard";
import { countCompletedLines } from "../utils/checkWin";

const BINGO = ["B", "I", "N", "G", "O"];

export default function GamePage({
  board,
  marked,
  onToggle,
  onReset,
}) {
  const completedLines = countCompletedLines(marked);

  return (
    <div className="bg-gray-800 p-6 rounded-xl w-96 space-y-4">
      {/* BINGO Progress */}
      <div className="flex justify-center gap-2">
        {BINGO.map((letter, idx) => (
          <div
            key={letter}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold
              ${
                idx < completedLines
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
          >
            {letter}
          </div>
        ))}
      </div>

      <BingoBoard
        board={board}
        marked={marked}
        onToggle={onToggle}
      />

      <div className="flex gap-2">
        <button
          onClick={onReset}
          className="flex-1 bg-red-600 py-2 rounded-lg hover:bg-red-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
