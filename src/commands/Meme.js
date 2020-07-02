const { Command } = require('discord-akairo');
const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
class MemeCommand extends Command {
    constructor() {
        super('meme', {
           aliases: ['meme'] 
        });
    }

    exec(message) {
        fetch("https://meme-api.herokuapp.com/gimme")
        .then((res) => res.json())
        .then((body) => {
            let embed = new MessageEmbed()
            .setTitle(body.title)
            .setImage(body.url)
            .setFooter(`From r/${body.subreddit}`)
            .setURL(body.postLink)
            .setColor("RANDOM")
            return message.util.send(embed)
        })
    }
}

module.exports = MemeCommand;