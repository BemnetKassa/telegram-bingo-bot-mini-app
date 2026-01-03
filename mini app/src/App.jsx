import { useEffect, useState } from "react";
import "./index.css";

const tg = window.Telegram?.WebApp;

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Telegram WebApp initialization
    tg?.ready();
    tg?.expand();

    // Get Telegram user info
    if (tg?.initDataUnsafe?.user) {
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">🎱 Bingo Game</h1>

        {user ? (
          <>
            <p className="mb-4">
              Welcome, <b>{user.first_name}</b>!
            </p>
            <button className="bg-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-500">
              Start Game
            </button>
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
}

export default App;
