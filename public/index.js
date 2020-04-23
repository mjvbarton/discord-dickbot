const Discord = require("discord.js");
const client = new Discord.client();
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
        res.write('Hey');
        res.end();
    }).listen(4000);

client.login(process.env.BOT_KEY);
client.on("ready", () => {console.log("Bot is ready.")});
client.on("message", (msg) => {
    if(msg.content === "/dick"){
        msg.reply("3=========D");
    }
    //none
});