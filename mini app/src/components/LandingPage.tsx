export default function LandingPage({ onStart }) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl w-96 text-center space-y-6">
      <h1 className="text-3xl font-bold">🎱 Bingo</h1>

      <p className="text-gray-300">
        Play Bingo directly inside Telegram.
      </p>

      <button
        onClick={onStart}
        className="w-full bg-green-600 py-3 rounded-lg text-lg font-semibold hover:bg-green-500"
      >
        Start Game
      </button>

      <p className="text-xs text-gray-500">
        No login required
      </p>
    </div>
  );
}
