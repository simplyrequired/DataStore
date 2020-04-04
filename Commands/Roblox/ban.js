const Discord = require('discord.js');
const Roblox = require('noblox.js');
const request = require('node-superfetch');
var Trello = require("trello");
var trello = new Trello("2ee133b7455dfbab6f87105921ab6e93", "1164b0fbfcb40c211b03bf122cc0a7794f1b5c075572f8deadc4d16194a01e5e");
var ListID = "5e88c894ef5dd95ef2d8c776"
const ClientSettings = require("../../Discord/ClientSettings.json")


module.exports = class help {
    constructor(){
            this.name = 'Robloxban',
            this.alias = ['robloxban'],
            this.usage = ''
    }
 
    async run(Client, message, Args) {
     const Username = Args[1]
     const Thumnail = `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${Username}`

     const NoReason = new Discord.RichEmbed()
        .setColor("0xe67e22")
        .setDescription(`Provide with a reason!`)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();

        const NoPermission = new Discord.RichEmbed()        
        .setColor("0xe67e22")
        .setDescription(`Provide a reason.`)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();

        const NoUsername = new Discord.RichEmbed()
        .setColor("0xe67e22")
        .setDescription(`Provide a username.`)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();

        const UserNotReal = new Discord.RichEmbed()
        .setColor("0xe67e22")
        .setDescription(`User does not exist on roblox. (Check your spellings)`)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();

        const Requested = new Discord.RichEmbed()
        .setAuthor(Username, Thumnail)
        .setColor("0xe67e22")
        .setDescription(`I have requested a ban for ${Username}. Have a nice day :)`)
        .setFooter(ClientSettings.Footer)
        .setTimestamp();

        //if (!message.member.roles.some(Roles => [ClientSettings.SHR,ClientSettings.HR].includes(Roles.id)))
       // return message.channel.send(NoPermission)
  if(!Username){
          return message.channel.send(NoUsername)
}

try {
     const { body } = await request.get(`http://api.roblox.com/users/get-by-username?username=${Username}`);
     const UserID = body.Id 
     const ReasonDecom = Args.slice(2).join(" ");
     const Reason = `**Username:** ${Username}\n**UserId:** ${UserID}\n**Reason:** ` + ReasonDecom

        if(body.errorMessage === "User not found"){
         return message.channel.send(UserNotReal)
        }

        if(!ReasonDecom){
                return message.channel.send(NoReason)
        }
        
        trello.addCard(Username, Reason, ListID)
        message.channel.send(Requested)
    } catch (err) {
        console.error(err);
    }

}}