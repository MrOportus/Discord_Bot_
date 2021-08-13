require("dotenv").config();
const request = require('request');
const {getStatus} = require('./site.js');
const {PREFIX, TOKEN} = process.env;
let Discord = require("discord.js");
const { send } = require("process");
const { url } = require("inspector");

// 1era forma de conectarme al discord all intentos
//const allIntents = new Discord.Intents();
//const client = new Discord.Client({ intents: allIntents });

const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

const prefix = '+';
console.log(process.env.PREFIX);
console.log(prefix);

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('ready', client => {
  client.channels.cache.get('874168312320364609').send(' ========   Bot iniciado!  ======== ');
  console.log ("Iniciado con prefix: " + prefix);
});

client.on('messageCreate', async (message)  => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    //const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();
    console.log("PREFIX PREVIO AL IF "+typeof PREFIX);

    if(message.content.startsWith(prefix + 'system')) {
      message.channel.send(`este es el sistema 1 🏓!!`);
    } else if(message.content.startsWith(PREFIX + 'hola')){
      console.log(PREFIX + ' -- Responde -- hola---');
      message.channel.send('Hola ! **' +message.author.username+ '** ¿Como estas?');
    } else if(message.content.startsWith(prefix + 'google')){
      const urls = "https://www.google.comm";
     
    try {
      var result = await getStatus(urls);
      console.log(result);
    } catch (error) {
      console.log('error en url.');
    }  
     
    

    //   getStatus(urls).then((result) => { 
    //   console.log(result);
      
    //   message.channel.send(result.site + ":  " +result.status);
      
    //   }).catch((error)=> {console.log(error);}); //CTR K + C  -> CTR K + U
    //  urls.forEach(url => message.channel.send(getStatus(url)));
    }else
    if(message.content.startsWith(prefix + 'help')){

      message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
      message.author.send('**COMANDOS**\n```\n'+
                          '-> '+prefix+'ping           :: el bot responde Pong. comprueba conexión.\n'+
                          '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n '+
                          '-> '+prefix+'google         :: responde status de web google.\n');                        
    }else
    if (message.content.startsWith(prefix + 'ping')){
      let ping = Math.floor(message.client.ping);   
      message.channel.send(":ping_pong: Pong!")   
    };
});

client.login(TOKEN);