import * as dotenv from 'dotenv';
import { Client as DiscordClient, Collection, Events, GatewayIntentBits } from  'discord.js';
import * as fs from 'fs';
dotenv.config();

const discordClient = new DiscordClient( { intents: 
    [ 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]});

discordClient.commands = new Collection();

discordClient.commands.load = dir => {
    for ( const file of fs.readdirSync( dir ) ) {
        
    }
};

discordClient.once( Events.ClientReady, c => {
    console.log(`Logged in as ${ c.user.tag }!`);
});

discordClient.login( process.env.DISCORD_TOKEN );