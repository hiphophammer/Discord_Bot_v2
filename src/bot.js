require( 'dotenv' ).config( );

import { fs } from 'node:fs';
import { path } from 'node:path';
import { Client as DiscordClient, GatewayIntentBits, Collection } from 'discord.js'

import { SetupNewClient, HandleSchema } from './sql/schema-setup.js'

const discordClient = new DiscordClient(
    { intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]});

const sqlClient = SetupNewClient( );
sqlClient.connect( );
// HandleSchema( sqlClient );

discordClient.on( 'ready', ( ) => {
    console.log( `Logged in as ${ discordClient.user.tag }!` );
});

discordClient.commands = new Collection( );
const commandsPath = path.join( __dirname, 'commands' );
const commandFiles = fs.readdirSync( commandsPath ).filter( file => file.endsWith( '.js' ) );

for ( const file of commandFiles ) {
    const filePath = path.join( commandsPath, file );
    const command = require( filePath );

    discordClient.commands.set( command.data.name, command );
    console.log( `Added \"${ Array.from( client.commands.keys( ) ).pop( ) }\" command` );
}

client.on( 'messageCreate', msg => {
    if ( msg.author.bot ) return;
    console.log( "Received: " + msg.content );
});

discordClient.login( process.env.MY_TOKEN );






// // error handling
// client.on('shardError', error => {
// 	console.error('A websocket connection encountered an error:', error);
// });

// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled rejection at ', promise, `reason: ${err.message}`);
//     process.exit(1);
// });

// client.login(process.env.MY_TOKEN);