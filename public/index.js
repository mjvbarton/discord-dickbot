const Discord = require("discord.js");
const client = new Discord.client();

client.login(process.env.AUTH_TOKEN);
client.on("ready", () => {console.log("Bot is ready.")});
client.on("message", (msg) => {
    if(msg.content === "/dick"){
        msg.reply("3=========D");
    }
});