import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
import * as fetch from 'node-fetch'

export default class RedditCommand extends Command {
    public constructor() {
        super('reddit', {
            aliases: ['reddit'],
            category: 'Fun',
            args: [
                {
                    id: 'subreddit',
                    prompt: {
                        start: (message: Message): string => `${message.author} please provide a subreddit`
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { subreddit } : { subreddit: string }) {
        const msg = await message.util.send(`Fetching a post from r/${subreddit}`)
        fetch(`https://reddit-api--raghavken.repl.co/reddit/${subreddit}`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            if(!body.img) return message.channel.send("An error occured please try again if this persits please report it to the devs") 

            else {
            let embed = new MessageEmbed()
            .setTitle(`From r/${subreddit}`)
            .setImage(body.img)
            .setColor("#9cc4e4")
            msg.edit(embed)

            }
        })
    }
}
