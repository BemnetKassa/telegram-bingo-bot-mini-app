export function useTelegram() {
  const tg = window.Telegram?.WebApp;

  if (tg) {
    tg.ready();
    return {
      tg,
      user: tg.initDataUnsafe?.user || null,
      platform: tg.platform,
    };
  }

  // Desktop / Browser fallback
  return {
    tg: null,
    user: {
      id: -1,
      first_name: "Guest",
      username: "desktop_user",
    },
    platform: "fallback",
  };
}
