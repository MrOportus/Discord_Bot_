require("dotenv").config();
const request = require('request');
const {getStatus} = require('./site.js');
const Discord = require("discord.js");
const { send } = require("process");
const { url } = require("inspector");
const {PREFIX, TOKEN} = process.env;
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('ready', () => {
  console.log('Iniciando Bot : ' +client.user.tag);
});

client.on('ready', client => {
  client.channels.cache.get('874168312320364609').send(' ========   Bot iniciado!  ======== ');
  console.log ("Iniciado con prefix: " + PREFIX);
});

client.on('messageCreate', async (message)  => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(message.content.startsWith(PREFIX + 'system')) {
      message.channel.send(`este es el sistema 1 🏓!!`);
    } else if(message.content.startsWith(PREFIX + 'hola')){
      console.log(PREFIX + ' -- Responde -- hola---');
      message.channel.send('Hola ! **' +message.author.username+ '** ¿Como estas?');
    } else if(message.content.startsWith(PREFIX + 'google')){
      const urls = "https://www.googleee.com";
     
    try {
      var result = await getStatus(urls);
      console.log(result);
      message.channel.send("Servicio: "+result.site + "\nEstado :  " +result.status);
    } catch (error) {
      console.log('error en url.');
    }  
    } else if(message.content.startsWith(PREFIX + 'help')){

      message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
      message.author.send('**COMANDOS**\n```\n'+
                          '-> '+PREFIX+'ping           :: el bot responde Pong. comprueba conexión.\n'+
                          '-> '+PREFIX+'hola           :: Retorna un saludo como mensaje.\n '+
                          '-> '+PREFIX+'google         :: responde status de web google.\n');                        
    } else if (message.content.startsWith(PREFIX + 'ping')){
      message.channel.send(":ping_pong: Pong!")   
    };
});

client.login(TOKEN);