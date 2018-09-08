const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDczMTU0Mjc4MzQxNzM4NDk4.Dj956Q.lZAQK66WFJS9E7krTu-DlKxPDZc);
