const { Listener } = require('discord-akairo');
const { ErelaClient } = require("erela.js");
const nodes = [
    {
        host: "localhost",
        port: 2333,
        password: "youshallnotpass",
    }
]
class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    async exec() {
        console.log('I\'m ready!');
        this.client.music = new ErelaClient(this.client, nodes);
    // Listens to events.
    this.client.music.on("nodeConnect", node => console.log("New node connected"));
    this.client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    this.client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    this.client.music.on("queueEnd", player => {
        player.textChannel.send("Queue has ended.")
        this.client.music.players.destroy(player.guild.id);
    });
    }
}

module.exports = ReadyListener;