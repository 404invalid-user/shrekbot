const { SlashCommandBuilder } = require('discord.js');

module.exports.command = new SlashCommandBuilder()
    .setName('dance')
    .setDescription('see Shrek dancing in all his glory');

const dance = ["https://tenor.com/view/shrek-dancing-dance-weird-gif-17345848"];

module.exports.run = function (interaction) {
    interaction.reply(dance[0]);
}