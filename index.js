const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

welcome(client);
});


  client.login('Token');
  