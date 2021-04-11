const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("config"); 
var token = config.get("token");
console.log('Token: ', '...' + token.slice(32))

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.send('pong');
  }
});

client.login(token);