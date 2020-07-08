import { Command } from "discord-akairo"
import { MessageEmbed, Message, GuildMember } from "discord.js"

export default class KickCommand extends Command {
    public constructor() {
        super('kick', {
            aliases: ['kick'],
            description: {
                content: 'kick a user'
            },
            category: 'Moderation',
            ratelimit: 3,
            args:[
                {
                    id: 'member',
                    type: 'member'
                },

                {
                    id: 'reason',
                    match: 'rest',
                    default: 'No reason provided    '
                }
            ],
            userPermissions: ["KICK_MEMBERS"]
        })
    }

    public async exec(message: Message, { member, reason }: {member: GuildMember, reason: string}) {
        const cM = await message.guild.members.fetch(this.client.user!.id)

        if(!member) return message.util.send("You need to provide someone to kick")

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.util.send("You dont have sufficient permissions")

        if(!member.kickable) return message.util.send(":x: This member cant be kicked")

        if(!cM.permissions.has('KICK_MEMBERS')) return message.util.send("I cant kick members")

        try {
            member.kick()
            message.util.send(`**${member.user.username}** was kicked by **${message.author.username}** for **${reason}**`)
        } catch (e){
            return message.util.send(`There was an error while executing that command | Error ${e}`)
        }
    }
}