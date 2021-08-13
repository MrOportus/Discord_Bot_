require("dotenv").config();
const request = require('request');
const {getStatus} = require('./site.js');
const Discord = require("discord.js");
const { send } = require("process");
const { url } = require("inspector");
const {DISCORD_TOKEN, DISCORD_PREFIX} = process.env;
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on('ready', () => {
  console.log('Iniciando Bot : ' +client.user.tag);
});

client.on('ready', client => {
  client.channels.cache.get('875687728921055233').send(' ========   Bot iniciado!  ======== ');
  console.log ("Iniciado con DISCORD_TOKEN: " + DISCORD_PREFIX);
});

client.on('messageCreate', async (message)  => {
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(message.content.startsWith(DISCORD_PREFIX + '1')) {
      message.channel.send('Hola este es el sistema 1 :desktop: ');
    } else if(message.content.startsWith(DISCORD_PREFIX + 'hola')){
      message.channel.send('Hola ! **' +message.author.username+ '** ¿Como estas?');
    } else if(message.content.startsWith(DISCORD_PREFIX + 'google')){
      const urls = "https://www.google.com";
     
    try {
      var result = await getStatus(urls);
      console.log(result);
      message.channel.send("Servicio: "+result.site + "\nEstado :  " +result.status);
    } catch (error) {
      console.log('error en url.');
    }  
    } else if(message.content.startsWith(DISCORD_PREFIX + '?')){

      message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
      message.author.send('**COMANDOS**\n\n'+
                          '-> '+DISCORD_PREFIX+'ping        :: el bot responde Pong.\n'+
                          '-> '+DISCORD_PREFIX+'hola        :: Retorna un saludo como mensaje.\n '+
                          '-> '+DISCORD_PREFIX+'?           :: Retorna un mensaje con comandos.\n '+
                          '-> '+DISCORD_PREFIX+'1           :: Retorna sistema 1.\n '+
                          '-> '+DISCORD_PREFIX+'google      :: responde status de web google.\n'+
                          '-----------------------------------------------------\n\n');                        
    } else if (message.content.startsWith(DISCORD_PREFIX + 'ping')){
      message.channel.send(":ping_pong: Pong!")   
    };
});

client.login(DISCORD_TOKEN);
