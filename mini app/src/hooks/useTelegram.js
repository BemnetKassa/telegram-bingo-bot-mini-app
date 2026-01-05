export function useTelegram() {
  const tg = window.Telegram?.WebApp;

  console.log("Telegram object:", window.Telegram);
  console.log("WebApp object:", tg);
  console.log("InitDataUnsafe:", tg?.initDataUnsafe);

  const user = tg?.initDataUnsafe?.user;

  return {
    tg,
    user,
    isReady: Boolean(user),
  };
}
