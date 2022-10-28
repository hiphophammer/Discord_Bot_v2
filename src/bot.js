import * as dotenv from 'dotenv';
import { Client as DiscordClient, Events, GatewayIntentBits } from  'discord.js';
dotenv.config();

const discordClient = new DiscordClient( { intents: 
    [ 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
    ]});

discordClient.login( process.env.DISCORD_TOKEN );