import { Command } from "discord-akairo"
import { Message, GuildMember, MessageEmbed } from "discord.js"
import { Repository } from "typeorm"

import { warns } from "../../models/Warns"
import { User } from "discord.js"

export default class InfractionsCommand extends Command {
    public constructor() {
        super('infractions', {
            aliases: ['infractions', 'warns'],
            category: 'Moderation',
            description: {
                content: 'view a members warns',
                usage: 'infractions [ member ]'
            },
            userPermissions: ['MANAGE_MESSAGES'],

            args: [
                {
                    id: "member",
                    type: "member",
                    default: (msg: Message) => msg.member
                }
            ]
        })  
    }

    public async exec(message: Message, { member }: {member: GuildMember}): Promise<Message> {
        const warnRepo: Repository<warns> = this.client.db.getRepository(warns)
        const Warns: warns[] = await warnRepo.find({user: member.id, guild: message.guild.id})

        if(!Warns.length) return message.util.send(`No infractions found`)

        const infractions = await Promise.all(Warns.map(async (v: warns, i: number)=> {
            const mod: User = await this.client.users.fetch(v.moderator).catch(() => null)
            if(mod) return {
                index: i + 1,
                moderator: mod.tag,
                reason: v.reason
            }
        }))

        return message.util.send(new MessageEmbed()
        .setAuthor(`Infractions | ${member.user.username}`, member.user.displayAvatarURL())
        .setColor("#F06292")
        .setDescription(infractions.map(v => `\`#${v.index}\` | Moderator: **${v.moderator}**\nReason: *${v.reason}*`))

        
        )
        
    }
}