const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("519144528146464768")
setInterval(function() {
channel.send(`spamfarmcreaditlol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);