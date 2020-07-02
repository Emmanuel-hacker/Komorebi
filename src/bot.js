const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo')
const { token, prefix } = require('../config.json')


class Client extends AkairoClient {
    constructor() {
        super({
            ownerID: '467030554131562506'
        }, {
            disableMentions: 'everyone'
        })

        this.commandHandler = new CommandHandler(this, {
            directory: './src/commands/',
            prefix: prefix,
            handleEdits: true,
            commandUtil: true
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners/'
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll()
    }
}




const client = new Client()
client.login(token)