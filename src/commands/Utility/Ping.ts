import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'Check the bots latency'
            },
            category:"Utility",
            ratelimit: 2
        })
    }

    public async exec(message: Message) {
        const m = await message.util.send("Pinging...")
        m.edit(`Pong! ${this.client.ws.ping}ms`)
    }
}