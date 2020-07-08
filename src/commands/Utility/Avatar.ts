import { Command } from "discord-akairo"
import { MessageEmbed, Message, GuildMember } from "discord.js"

export default class AvatarCommand extends Command {
    public constructor() {
        super('avatar', {
            aliases: ['avatar', 'av'],
            description: {
                content: 'See your avatar or someone elses'
            },
            category: 'Utility',
            ratelimit: 3,
            args:[
                {
                    id: 'member',
                    type: 'member',
                    match: "rest",
                    default: (msg: Message) => msg.member
                }
            ]
        })
    }

    public async exec(message: Message, { member }: {member: GuildMember}) {
        let person = message.author || message.mentions.members.first()

        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(member.user.displayAvatarURL({size: 1024, dynamic: true}))
        .setTitle(`Avatar | ${member.user.tag}`)

        return message.util.send(embed)
    }
}