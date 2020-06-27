const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('ping', {
           aliases: ['ping'] 
        });
    }

    exec(message) {
        return message.reply(`Pong ${this.client.ws.ping}ms`);
    }
}

module.exports = PingCommand;