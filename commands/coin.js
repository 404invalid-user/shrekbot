const { SlashCommandBuilder } = require('discord.js');

module.exports.command = new SlashCommandBuilder()
    .setName('coin')
    .setDescription('Get shrek to flip a coin for you');

module.exports.run = function (interaction) {
    interaction.reply(`:coin: you landed a ${["heads", "tails"][Math.floor(Math.random())]}`).catch(e => console.log(e));
}