import { Command } from "discord-akairo"
import { Message, MessageEmbed } from "discord.js"


export default class ServerinfoCommand extends Command {
    public constructor() {
        super('serverinfo', {
            aliases: ['serverinfo'],
            description: {
                content: 'View info about the server you\'re in'
            },
            category: 'Utility'
        })
    }

    public async exec(message: Message) {
        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Info for ${message.guild.name}`, message.guild.iconURL())
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('General', [
            `**❯ Name:** ${message.guild.name}`,
            `**❯ ID:** ${message.guild.id}`,
            `**❯ Owner:** \`${message.guild.owner.user.tag}\` (${message.guild.ownerID})`,
            `**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            '\u200b'
        ])

        message.util.send(embed)
    }
}