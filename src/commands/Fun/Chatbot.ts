import { Command } from "discord-akairo"
import { Message } from "discord.js"
const lib = require("cleverbot-free");

export default class ChatbotCommand extends Command {
    public constructor() {
        super('chatbot', {
            aliases: ['chatbot'],
            category: 'Fun',
            args: [
                {
                    id: 'text',
                    prompt: {
                        start: (msg: Message): string => `${msg.author} provide text`
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { text } : { text: string}) {
        if(!text) return;
        lib(text).then(response => message.util.send(response));
    }
}