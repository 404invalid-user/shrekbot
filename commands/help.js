module.exports = {
    name: 'help',
    description: "help with commands and things for shrek",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const { shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')


        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        var guild = data[message.guild.id];
        var prefix = guild.prefix

        let helpEmbed = new Discord.MessageEmbed()
            .setAuthor('shrek', `${shrekImgUrl}`, `${shrekUrl}`)
            .setColor(`${shrekColour}`)
            .setTitle('help with shrek bot')
            .setURL(`${shrekUrl}`)
            .setDescription(`commands:\n${prefix}ping - shows shreks ping\n${prefix}help - shows this\n${prefix}about - gives information about this bot\n${prefix}prefix {new prefix} - sets new prefix for the bot\n${prefix}meme - Sends a random meme from r/shrekmemes\n${prefix}addbot - gives a link for you to add the bot to your server\n${prefix}quote - gives a random quote by Shrek\n${prefix}dance - Shrek dancing gif\n${prefix}coin - shrek flips a coin for you\n${prefix}8ball - shreks 8ball will answer all your questions\n${prefix}dice - rolls a dice for you`)


        message.channel.send(helpEmbed).catch(e => console.log(e))



    }
}