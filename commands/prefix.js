module.exports = {
    name: 'prefix',
    description: "allows admins amd moderators to set shreks prefix",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const { version } = require('../package.json')
        const { shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')
        const conf = require('../conf.json')

        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

        var guild = data[message.guild.id];

        if (!guild) {
            return message.reply("error")
        }

        var hasPerm = message.member.hasPermission('MANAGE_MESSAGES');
        if (hasPerm) {
            if (!args[1]) {
                message.channel.send('No prefix supplied please add the prefix you would like to set eg' + guild.prefix + 'prefix s? to set the prefix too s?').catch(e => console.log(e));
            }

            if (args[1]) {


                if (args[2]) {
                    message.channel.send('there can’t be any spaces in your prefix')
                } else {

                    guild.prefix = args[1];
                    message.channel.send('Set the prefix to `' + guild.prefix + '`.').catch(e => console.log(e));

                    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
                }
            }
        } else {
            message.channel.send('You need the `MANAGE MESSAGES` permission for that.').catch(e => console.log(e))
        }

    }
}