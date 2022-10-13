require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages] });
const fs = require('node:fs');
const path = require('node:path')

const valid_msg = {

};

client.commands = new Discord.Collection()
const commands_path = path.join(__dirname, 'commands');
const command_files = fs.readdirSync(commands_path).filter(file => file.endsWith('.js'));

for (const file of command_files) {
    const file_path = path.join(commands_path, file);
    const command = require(file_path);

    client.commands.set(command.data.name, command);
    console.log(`Added \"${Array.from(client.commands.keys()).pop()}\" command`);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.author.bot) return; // don't react to messages from bots
    console.log("Received: " + msg + "!");
});

// client.login(process.env.MY_TOKEN);