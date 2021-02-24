const Discord = require('discord.js')
const Client = new Discord.Client()
const fs = require('fs');
const prefix = "n!";
const config = require('./config.json')
Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);

}
Client.once('ready', async () => {
    console.log('Online!');
    
      Client.user.setPresence({ activity: { name: "No", type: 0} });
     
  }); 
Client.on('message', message => {
    const args = message.content.trim().split(/ +/g);

    const refusal = ["No", "No, no i don't think i will", "Fuck off, do it yourself","I'd rather not listen to you","I'm not your fucking slave","Piss off you dickhead","Leave me alone","Can you don't", "Fuck you, ya cunt","Eat my ass"]
    if(message.content != 'n!help'){
        if(message.content.startsWith('n!')){
        const answer = refusal[Math.floor(Math.random() * refusal.length)]
        message.channel.send(answer)
        }
    }


    
    const commandName = args[0].slice(prefix.length).toLowerCase();
    const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if(!command)return;
    command.execute(message, args, prefix, Client);
})
Client.login(config.token)