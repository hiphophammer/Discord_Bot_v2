const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ㅇㅅㅇ')
        .setDescription('ㅇㅅㅇ임?'),
    async execute(interaction) {
        await interaction.reply('ㅁㅅㅁ');
    },
};