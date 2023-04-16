module.exports = {
    name: 'meme',
    description: "gets a random meme from r/shrekmemes and sends it to your server",
    execute(message, args) {

        const https = require('https');
        const Discord = require('discord.js');
        const { prefix, shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json');

        const url = 'https://www.reddit.com/r/shrekmemes/.json?limit=200'

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {


                    message.channel.send('there has been a shrekup retrying...')
                }

                if (!index.preview) return message.channel.send('a big shrekup has hapened do that command agian');

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                if (index.post_hint !== 'image') {
                    console.log('meme.js line 38 |')
                }

                console.log(image);

                const imageembed = new Discord.MessageEmbed()
                    .setTitle('a swampy shrek meme')
                    .setImage(image)
                    .setColor(`${shrekColour}`)
                    .setDescription(`[${title}](${link})`)
                    //.setURL(`https://reddit.com/${subRedditName}`)
                    .setFooter('powered by ' + `${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function(e) {
                console.log('Got an error: ', e).catch(e => console.log(e))
            })
        })

    }
}