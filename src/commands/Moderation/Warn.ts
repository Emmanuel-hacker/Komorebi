import { Command } from "discord-akairo"
import { MessageEmbed, Message, GuildMember } from "discord.js"
import { Repository } from "typeorm"

import { warns } from "../../models/Warns"

export default class WarnCommand extends Command {
    public constructor() {
        super('warn', {
            aliases: ['warn'],
            description: {
                content: 'warn a user'
            },
            category: 'Moderation',
            ratelimit: 3,
            args:[
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: (msg: Message) => `${msg.author} please provide a member to warn`,
                        retry: (msg: Message) => `${msg.author} please provide a valid member to warn`
                    }
                },

                {
                    id: 'reason',
                    type: "string",
                    match: 'rest',
                    default: 'No reason provided    '
                }
            ],
            userPermissions: ["MANAGE_MESSAGES"]
        })
    }

    public async exec(message: Message, { member, reason }: {member: GuildMember, reason: string}) {
        const warnRepo: Repository<warns> = this.client.db.getRepository(warns)
        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID)
            return message.util.reply("this member has higher or an equal role to you");

        await warnRepo.insert({
            guild: message.guild.id,
            user: member.id,
            moderator: message.author.id,
            reason: reason
        })    

        return message.util.send(`**${member.user.tag}** has been warned by **${message.author.tag}** for *${reason}*`)
    }
}