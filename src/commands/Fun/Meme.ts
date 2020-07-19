import { Command } from "discord-akairo"
import { MessageEmbed, Message } from "discord.js"
import * as fetch from "node-fetch"

export default class MemeCommand extends Command {
    public constructor() {
        super('meme', {
            aliases: ['meme'],
            description: {
                content: 'A meme command that fetches a random meme'
            },
            category: 'Fun',
            ratelimit: 2
        })
    }


public async exec(message: Message) {
    fetch("https://meme-api.herokuapp.com/gimme")
        .then((res) => res.json())
        .then((body) => {
            let embed = new MessageEmbed()
            .setTitle(body.title)
            .setImage(body.url)
            .setFooter(`From r/${body.subreddit}`)
            .setURL(body.postLink)
            .setColor("#F06292")
            
            return message.util.send(embed)
        })

    }
}