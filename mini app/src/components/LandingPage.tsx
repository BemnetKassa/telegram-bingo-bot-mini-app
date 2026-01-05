export default function LandingPage({ user, onStart }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl w-96 text-center space-y-4">
      <h1 className="text-2xl font-bold">🎱 Bingo Game</h1>
      <p className="text-gray-300">
        Welcome {user.first_name}!
      </p>

      <button
        onClick={onStart}
        className="bg-green-600 w-full py-2 rounded-lg hover:bg-green-500"
      >
        Start Game
      </button>
    </div>
  );
}
