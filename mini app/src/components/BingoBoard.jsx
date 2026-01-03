export default function BingoBoard({ board, marked, onToggle }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {board.map((col, cIdx) =>
        col.map((num, rIdx) => {
          const key = `${cIdx}-${rIdx}`;
          const isMarked = marked[key];

          return (
            <button
              key={key}
              onClick={() => onToggle(key)}
              className={`h-14 rounded-lg font-bold text-lg
                ${isMarked
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600"}`}
            >
              {num}
            </button>
          );
        })
      )}
    </div>
  );
}
