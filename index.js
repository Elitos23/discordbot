     

const Discord = require("discord.js");

const config = require("./config.json");
const command = require("./command.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", function(message) { 
  if (message.content.match("https://discord.com/invite/"))
  {
message.reply("@sol");
message.channel.send(`<@&${'972566001491271690'}> Found one!!`);
  }                                      
});   
client.login(config.token);










/* const prefix = "!";
client.on("messageCreate", function(message) { 

                                         
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    const channel = client.channels.cache.get('761128869541052440');
channel.send('lol');
  }
});   */
 










