import ytdl from "ytdl-core"
import { Command } from "discord-akairo"
import { Message } from "discord.js"
import { ytapi } from "../../Config"
import * as yt from 'simple-youtube-api'

export default class PlayCommand extends Command {
    public constructor() {
        super('play', {
            aliases: ['play'],
            category: 'Music',
            args: [
                {
                    id: 'url',
                    prompt: {
                        start: (message: Message): string => `Please provide a URL`
                    }
                }
            ]
        })
    }

    public exec(message: Message, { url }: { url: string }) {
        const voiceChannel = message.member.voice.channel;
        

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(url, { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
        });

    }
}