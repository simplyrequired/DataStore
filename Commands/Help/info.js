const Discord = require('discord.js');
const Roblox = require('noblox.js');

const ClientSettings = require("../../Discord/ClientSettings.json")


module.exports = class help {
    constructor(){
            this.name = 'Info',
            this.alias = ['info'],
            this.usage = ''
    }
 
    async run(Client, message, Args) {
        const MessageAuthor = message.author.username
        const MessageAuthorPfp = message.author.displayAvatarURL

        const HelpList = new Discord.RichEmbed()
        .setAuthor(MessageAuthor, MessageAuthorPfp)
        .setColor("0xd63031")
        .setDescription(`
        🎖️ Welcome to Human's Foundation,

      **SECURE. CONTAIN. PROTECT.**

      Operating clandestine and worldwide, the Foundation operates beyond jurisdiction, empowered and entrusted by 
      every major national government with the task of containing anomalous objects, entities, and phenomena. 
      These anomalies pose a significant threat to global security by threatening either physical or 
      psychological harm.
      
        `)
        .setThumbnail(MessageAuthorPfp)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();
        message.channel.send(HelpList);
        
    }
}