module.exports = {
    command: new SlashCommandBuilder()
	.setName('about')
	.setDescription('about shrek and all his commands'),
    execute(client, message) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const { version } = require('../package.json')
        const { shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')
        const conf = require('../conf.json')
        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));


        message.channel.send("about").then(m => {

            //bots uptime
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${days} d, ${hours} h, ${minutes} m, ${seconds} s`;

            //bots ping 
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(client.ws.ping)
            var thePing = "ping: " + `${ping}` + " api ping: " + `${apiPing}`


            let aboutEmbed = new Discord.MessageEmbed()
                .setAuthor('shrek', `${shrekImgUrl}`, `${shrekUrl}`)
                .setColor(`${shrekColour}`)
                .setTitle('about')
                .setThumbnail(`${shrekImgUrl}`)
                .setURL(`${shrekUrl}`)
                .addField('version:', `${version}`)
                .addField('Up Time', uptime)
                .addField('Ping', thePing)
                .addField('total commands sent:', `${data.totalCommandsSent}`)
                .addField('commands sent in this server:', `${data[message.guild.id].commandsSent}`)
                .addField('Website:', `${shrekUrl}`)
                .addField('top.gg:', `${conf.topggUrl}`)
                .addField('discordbotlist.com:', `${conf.discordbotlistUrl}`)
                .addField('discord.bots.gg:', `${conf.discordbotsUrl}`)
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`)


            m.edit(aboutEmbed).catch(e => console.log(e))

        });

    }
}