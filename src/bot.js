require( 'dotenv' ).config( );

import { fs } from 'node:fs';
import { path } from 'node:path';
import { Client as DiscordClient, GatewayIntentBits } from 'discord.js'

import { SetupNewClient, HandleSchema } from './sql/schema-setup.js'

const discordClient = new DiscordClient(
    { intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]});

const sqlClient = SetupNewClient( );
sqlClient.connect();
// HandleSchema( sqlClient );



// client.commands = new Discord.Collection()
// const commands_path = path.join(__dirname, 'commands');
// const command_files = fs.readdirSync(commands_path).filter(file => file.endsWith('.js'));

// for (const file of command_files) {
//     const file_path = path.join(commands_path, file);
//     const command = require(file_path);

//     client.commands.set(command.data.name, command);
//     console.log(`Added \"${Array.from(client.commands.keys()).pop()}\" command`);
// }

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('messageCreate', msg => {
//     if (msg.author.bot) return; // don't react to messages from bots
//     console.log("Received: " + msg.content);
// });

// // error handling
// client.on('shardError', error => {
// 	console.error('A websocket connection encountered an error:', error);
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled rejection at ', promise, `reason: ${err.message}`);
//     process.exit(1);
// });

// client.login(process.env.MY_TOKEN);