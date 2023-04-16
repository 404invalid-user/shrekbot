module.exports = {
    name: 'ping',
    description: "sends shreks ping",
    execute(message, args) {

        const Discord = require('discord.js');

        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(client.ws.ping)
            m.edit(`ping: \`${ping}\` | api ping: \`${apiPing}\`.`).catch(e => console.log(e))
        });
    }
}