require("dotenv").config();
let Discord = require("discord.js");
const { send } = require("process");


// 1era forma de conectarme al discord all intentos
//const allIntents = new Discord.Intents();
//const client = new Discord.Client({ intents: allIntents });

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });


const prefix = '+';
console.log(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', client => {
  let n=0;
  while(n < 3){
  client.channels.cache.get('874168312320364609').send(n + 'Bot iniciado!');
  n=n+1;  
  }
  console.log (prefix);
})

client.on('messageCreate', async (message)  => {
  //ping
 
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(message.content.startsWith(process.env.PREFIX)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if(message.content.startsWith(prefix + 'pepe')) {
      message.channel.send(`pepe-pong 🏓!!`);
    }else
    if(message.content.startsWith(prefix + 'aa')){
      message.channel.send(`brrr🏓!!`);
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