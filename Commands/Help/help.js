const Discord = require('discord.js');
const Roblox = require('noblox.js');

const ClientSettings = require("../../Discord/ClientSettings.json")


module.exports = class help {
    constructor(){
            this.name = 'Help',
            this.alias = ['help'],
            this.usage = ''
    }
 
    async run(Client, message, Args) {
        const MessageAuthor = message.author.username
        const MessageAuthorPfp = message.author.displayAvatarURL

        const HelpList = new Discord.RichEmbed()
        .setAuthor(MessageAuthor, MessageAuthorPfp)
        .setColor("0xd63031")
        .setTitle('Humany\'s Foundation Commands')
        .setDescription(`
        **SECURE. CONTAIN. PROTECT.**
        
        **:pushpin: Groups**
        \`promote\` \`demote\` \`setrank\` \`pending\` 
        \`shout\` \`clearshout\`

        **:clipboard: Misc**
        \`invite\` \`perms\` \`owner\`

        **:page_with_curl:  Applications**
        \`Coming soon :)\`
        
        `)
        .setThumbnail(MessageAuthorPfp)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();
        message.channel.send(HelpList);
        
    }
}