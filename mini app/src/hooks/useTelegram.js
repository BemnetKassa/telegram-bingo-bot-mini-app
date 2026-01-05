import { useEffect, useState } from "react";

export function useTelegram() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      setUser(tg.initDataUnsafe?.user || null);
      setIsReady(true);
    } else {
      // ✅ FALLBACK (Desktop / Browser)
      setUser({
        id: -1,
        first_name: "Guest",
        username: "guest_user",
      });
      setIsReady(true);
    }
  }, []);

  return { user, isReady };
}
