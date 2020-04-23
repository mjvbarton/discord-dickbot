const Discord = require("discord.js");
const client = new Discord.client();

client.login("NzAyODMzNDU0MTk0MjI5MzE4.XqF1UQ.a6lkaGUnb01tAa9Bjt9rK11rfbM");
client.on("ready", () => {console.log("Bot is ready.")});
client.on("message", (msg) => {
    if(msg.content === "/dick"){
        msg.reply("3========D");
    }
});