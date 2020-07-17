//import { Manager } from "lavaclient" 
import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
import manager from "../../listeners/ReadyListener"
export default class PlayCommand extends Command {
    public constructor() {
        super('play', {
            aliases: ['play'],
            category: 'Music',
            args: [
                {
                    id: 'song',
                    prompt: {
                        start: (message: Message): string => `Please provide a song`
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { song }: { song: string }) {
        const voiceChannel = message.member.voice

        if (!voiceChannel) return message.util.send('Please join a voice channel')
        
        //let player = manager.players.get(message.guild.id); 
    }
}