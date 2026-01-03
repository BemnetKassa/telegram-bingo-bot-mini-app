import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start command
bot.start((ctx) => {
  const firstName = ctx.from.first_name;

  ctx.reply(
    `🎉 Welcome ${firstName}!\n\nRegister and start playing Bingo.`,
    Markup.inlineKeyboard([
      [Markup.button.callback("📝 Register", "REGISTER")],
    ])
  );
});

// Register button
bot.action("REGISTER", async (ctx) => {
  const user = ctx.from;

  // Save user ID to DB later
  console.log("Registered user:", user.id);

  await ctx.answerCbQuery(); // Acknowledge button press

  ctx.reply(
    "✅ Registration successful!\n\nClick Play to start the game.",
    Markup.inlineKeyboard([
      [
        Markup.button.webApp(
          "🎮 Play",
          process.env.MINI_APP_URL // ✅ must be HTTPS URL
        ),
      ],
    ])
  );
});

// Launch bot
bot.launch();
console.log("🤖 Bot is up and running...");
