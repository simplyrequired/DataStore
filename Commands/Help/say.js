const Discord = require('discord.js');
const Roblox = require('noblox.js');

const ClientSettings = require("../../Discord/ClientSettings.json")


module.exports = class help {
    constructor(){
            this.name = 'say',
            this.alias = ['say'],
            this.usage = ''
    }
 
    async run(Client, message, Args) {
        const ClientMessage = Args.join(" ").slice(4);
        if (!ClientMessage) return message.channel.send("no");
        message.delete();
        message.channel.send("Don't try..");
        
    }
}