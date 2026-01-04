export default function LandingPage({ user, onStart }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl w-96 text-center space-y-4">
      <h1 className="text-2xl font-bold">🎱 Bingo Game</h1>

      <p className="text-gray-300">
        Welcome, <span className="text-white font-semibold">
          {user.first_name}
        </span>
      </p>

      <button
        onClick={onStart}
        className="w-full bg-green-600 py-2 rounded-lg hover:bg-green-500"
      >
        Start Game
      </button>
    </div>
  );
}
