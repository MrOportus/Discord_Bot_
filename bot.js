let Discord = require("discord.js");
const { send } = require("process");
//const client = new Discord.Client();

const allIntents = new Discord.Intents();
const client = new Discord.Client({ intents: allIntents });

require("dotenv").config();



console.log(process.env.TOKEN);

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.channel.send("pong");
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
});
      
    
    client.login(process.env.TOKEN);