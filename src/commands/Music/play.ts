import ytdl from "ytdl-core"
import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"
import { ytapi } from "../../Config"
const search = require('youtube-search')

export default class PlayCommand extends Command {
    public constructor() {
        super('play', {
            aliases: ['play'],
            category: 'Music',
            args: [
                {
                    id: 'ytsearch',
                    prompt: {
                        start: (message: Message): string => `Please provide a search query`
                    }
                }
            ]
        })
    }

    public exec(message: Message, { ytsearch }: { ytsearch: string }) {
        var opts = {
            maxResults: 1,
            key: ytapi
          };
        const voiceChannel = message.member.voice.channel;

     
        
        search(ytsearch, opts, (err, results) => {
            if(err) return console.log(err);
           
            console.log(results)

            data = results
          });

          let data;

		if (!voiceChannel) {
			return message.reply('please join a voice channel first!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(data[0].link, { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
           // message.util.send(`\`Now Playing ${data[0].title}\``)

			dispatcher.on('finish', () => voiceChannel.leave())
        });

    }
}