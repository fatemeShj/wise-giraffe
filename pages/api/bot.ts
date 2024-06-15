const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
const web_link = "https://giraffe-rho.vercel.app/";

bot.start((ctx: any) =>
  ctx.reply("Welcome :)))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "Bot is running" });
}
