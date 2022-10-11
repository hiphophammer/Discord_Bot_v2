require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in!')
})

client.login(process.env.TOKEN);