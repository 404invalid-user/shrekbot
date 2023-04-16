module.exports = {
    name: 'quote',
    description: "get a randome quote from shrek",
    execute(message, args) {

        const Discord = require('discord.js');
        const { prefix, shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')

        var shrekQuote = [
            "(looks at Farquaad's very large castle) Gee, you think he's compensating for something?",
            "What are you doing in my swamp!?", "Ogres are like onions.", "Donkey!!",
            "One of a kind.", "It’s on my to do list. Now come on", "Donkey, two things okay? Shut… up.",
            "Well, I have to save my ass.", "Oh, would you look at that.",
            "(looks at Farquaad's very large castle) Gee, you think he's compensating for something?",
            "What are you doing in my swamp!?", "Ogres are like onions.",
            "Donkey!!", "One of a kind.", "It’s on my to do list. Now come on",
            "Donkey, two things okay? Shut… up.",
            "Well, I have to save my ass.",
            "Oh, would you look at that."
        ];
        var randomQuote = Math.floor(Math.random() * shrekQuote.length);
        message.channel.send(`${shrekQuote[randomQuote]}`).catch(e => console.log(e))
    }
}