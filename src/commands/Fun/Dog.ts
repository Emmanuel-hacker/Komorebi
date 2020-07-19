import { Command } from "discord-akairo"
import { MessageEmbed, Message } from "discord.js"
import * as fetch from "node-fetch"

export default class DogCommand extends Command {
    public constructor() {
        super('dog', {
            aliases: ['dog', 'doge'],
            description: {
                content: 'See a dog pic'
            },
            category: 'Fun',
            ratelimit: 3
        })
    }

    public async exec(message: Message) {
        fetch("https://some-random-api.ml/img/dog")
        .then((res) => res.json())
        .then((body) => {
            let embed = new MessageEmbed()
            .setImage(body.link)
            .setColor("#F06292")
            .setFooter(`Dog for ${message.author.username}`)
            message.util.send(embed)
        });

    }
}