require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const shrek = new Client({ intents: [GatewayIntentBits.Guilds] });

shrek.once(Events.ClientReady, c => {
    console.log("Ready!");
	console.log(`Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
shrek.login(process.env.TOKEN);



shrek.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    shrek.commands.set(command.name, command);
}

//cmddd = `${shrek.commands.get('about').description}`


client.on('message', message => {
    if (!message.guild) return;

    var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

    var guild = data[message.guild.id];

    if (!guild) {
        data[message.guild.id] = {
            prefix: 's>',
            commandsSent: 0
        };

        guild = data[message.guild.id];
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    }


    //needs server prefix and user not to be a bot
    if (!message.content.startsWith(guild.prefix) || message.author.bot) return;

    let args = message.content.toLowerCase().substring(guild.prefix.length).split(" ");
    const cmd = args[0]

    if (args[0] == 'eval') {


        //eval remove___________________

        const evalargs = message.content.split(" ").slice(1);

        function clean(text) {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
        if (message.author.id !== conf.ownerId) return message.channel.send("no! you cant do that only <@!522534458071449620> can.");

        if (message.author.id == conf.ownerId) {
            try {
                const code = evalargs.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }
        //++++++++++++++++++++++
    }

    if (!shrek.commands.has(cmd)) return;

    try {
        shrek.commands.get(cmd).execute(message, args);
        addCmd(message.guild.id);
    } catch (error) {
        console.error(error);
        message.reply('there was an error with that command!');
    }

    if (args[0] == 'guilds') {
        if (message.author.id == ownerId) {
            message.channel.send(`im in ${shrek.guilds.cache.size} guilds`)
        }
    }

    /*
    if (args[0] == 'c') {
        addCmd()
        let channel = client.channels.cache.get(`${args[1]}`);
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        })
    }
    if (args[0] == 'd') {
        addCmd()
        let channel = client.channels.cache.get(`${args[1]}`);
        channel.leave()
    }
    */
}
})


shrek.on('guildCreate', guild => {
    //umm remove this 
})




shrek.login(conf.token)