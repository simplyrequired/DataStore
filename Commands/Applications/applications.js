const Discord = require('discord.js');
const Roblox = require('noblox.js');
const Trello = require("trello");
const trello = new Trello("2ee133b7455dfbab6f87105921ab6e93","1164b0fbfcb40c211b03bf122cc0a7794f1b5c075572f8deadc4d16194a01e5e");
const ClientSettings = require("../../Discord/ClientSettings.json")


module.exports = class help {
    constructor(){
            this.name = 'Aplications',
            this.alias = ['applications'],
            this.usage = ''
    }
 
    async run(Client, message, Args) {
        //trello.getCardsOnList(ClientSettings.ApplicationListID);
            var cardsPromise = trello.getCardsOnList(ClientSettings.ApplicationListID);
            cardsPromise.then((cards) => {
              const Body = cards
              console.log(cards)
              console.log(cards.post)
            })
    }}