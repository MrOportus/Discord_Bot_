let Discord = require("discord.js");
const { send } = require("process");
//const client = new Discord.Client();

// 1era forma de conectarme al discord all intentos
//const allIntents = new Discord.Intents();
//const client = new Discord.Client({ intents: allIntents });
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });


require("dotenv").config();



console.log(process.env.TOKEN);

/*client.on('ready', () =>{
  console.log("Ready!");
  
 

});*/

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message)  => {
  //ping
    let prefix = ".";
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
      message.channel.send("pong");
      }
    if(command === 'responde'){
      message.reply("hola");
    }
 
});



/*client.on('message', message => {

  guildObj.defaultChannel.send("My Message");
      console.log("cliente on");
      message.channel.send("pong");
      if(message.author.bot) return;
      if(!message.content.startWith(prefix)) return;

      const command = message.content.slice(prefix.length);

      if(command === "ping"){
      console.log("pong console");
      message.channel.send("pong");
      }

});*/

client.login(process.env.TOKEN);