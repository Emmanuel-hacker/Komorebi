import { Command } from "discord-akairo"
import { Message } from "discord.js"

export default class ReloadCommand extends Command {
    public constructor() {
        super('reload', {
            aliases: ['reload'],
            category: 'Developer',
            ownerOnly: true,
            args: [
                {
                    id: 'commandID',
                    prompt: {
                        start: (message: Message): string => `${message.author}, which command do you want to reload?`
                    }
                }
            ],
        })
    }

    public async exec(message: Message, { commandID } : {commandID: string}) {
        this.handler.reload(commandID);
        return message.reply(`Reloaded command ${commandID}!`);
    }
}