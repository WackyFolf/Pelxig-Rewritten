const Discord = require('discord.js');
const prompt = require('prompt-sync')();
const colors = require('colors');
const client = new Discord.Client();
const config = require("config"); 

try {
  var token = config.get('token');
} // Attempt to read token from config/config.json
catch(error) {
  console.log("\nTried to read token from config file, but failed. Please enter a token, or add it to the config and restart the program.".yellow)
  var token = prompt('Token: ')
} // If a token was not found, ask for one instead

console.log('Received token: ', '...' + token.slice(32)) // Print out received token, cutting off the first two sections

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
}); // Log the bot account that was signed into

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.send('pong');
  }
}); // Example Discord.JS stuff that will be removed

client.login(token); 


