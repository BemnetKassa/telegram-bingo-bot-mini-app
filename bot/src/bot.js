import { Telegraf, Markup } from "telegraf";
import dotenv from "dotenv";

dotenv.congfig();

const bot = new Telegraf(process.env.BOT_TOKEN);

// /start comand
bot.start((ctx) => {
    const firstName = ctx.from.first_name;

    ctx.reply(
        `🎉 Welcom ${firstName} !\n\nRegister and start playing Bingo.`,
        Markup.inlineKeyboard([
            [Markup.button.callback("📝 Register", "REGISTER")],
        ])
    );
});

// Register button
bot.action("REGISTER", async (ctx) => {
    const user =ctx.from;

    // Later we'll save this to DB
    console.log("Registered user:", user.id);

    await ctx.answerCbQuery(); // Acknowledge the button press
    ctx.reply(
        "✅ Registeration successful!\n\nClick play to start the game.",
        Markup.inlineKeyboard([
            [
                Markup.button.webApp(
                    "🎮 play",
                    process.env.MINI_APP_URL
                ),
            ],
        ])
    );
});

// Launch bot
bot.launch();
console.log("🤖 Bot is up and running...");