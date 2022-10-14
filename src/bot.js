require('dotenv').config();

const fs = require('node:fs');
const path = require('node:path')

const Discord = require('discord.js');
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds, 
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
]});

const { Client } = require('pg');

const client_sql = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client_sql.connect();

client_sql.query( 'SELECT table_schema,table_name FROM information_schema.tables', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client_sql.end;
});

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
    console.log("Received: " + msg.content);
});

// error handling

client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled rejection at ', promise, `reason: ${err.message}`);
    process.exit(1);
});

client.login(process.env.MY_TOKEN);