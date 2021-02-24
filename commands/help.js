const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
let help = require('../help.json');
module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args) {
        if(message.channel.type == "text"){
        
      
          
                const HelpEmbed = new Discord.MessageEmbed()
                .setColor('#ff000')
                .setTitle('Commands')
                .setTimestamp()
                    help["information"].forEach(command =>{
                        HelpEmbed.addField(command.name, command.description)
                })   
                    message.channel.send(HelpEmbed)
                return;
            
            
        }
    }
}