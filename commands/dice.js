const { SlashCommandBuilder } = require('discord.js');

module.exports.command = new SlashCommandBuilder()
    .setName('dice')
    .setDescription('Get shrek to roll a dice for you');

module.exports.run = function (interaction) {
    interaction.reply(`you rolled a \`${Math.ceil(Math.random() * 6)}\``);
}
