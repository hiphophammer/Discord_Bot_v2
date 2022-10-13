require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const fs = require('fs');

const valid_msg = {

};

client.commands = new Discord.Collection()

client.commands.load = dir => {
    for (const file of fs.readdirSync(dir)) {
        const cmd = require(`${dir}/${file}`);
        client.commands.set(cmd.name, cmd);
    }
    console.log('The command ' + client.commands.map(c => c.name).join(', ') + ' has been loaded.');
}

client.commands.load(__dirname + "/commands");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.author.bot) return; // don't react to messages from bots
    console.log("Received: " + msg + "!");
});

client.login(process.env.MY_TOKEN);