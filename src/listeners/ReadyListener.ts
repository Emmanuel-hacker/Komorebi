import { Listener } from "discord-akairo";
import { Manager } from "lavaclient";

const nodes = [
  {
    id: "KomoNode",
    host: "localhost",
    port: 2333,
    password: "youshallnotpass"
  }
]


export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        })
    }
    public async exec() {
        console.log(`logged in as ${this.client.user.tag} (${this.client.user.id})`)
  
         /* music("socketError", ({ id }, error) => console.error(`${id} ran into an error`, error));
manager.on("socketReady", (node) => console.log(`${node.id} connected.`));

// Lets make sure we're supplying voice updates to lavaclient.
      this.client.ws.on("VOICE_STATE_UPDATE", (upd) => manager.stateUpdate(upd));
      this.client.ws.on("VOICE_SERVER_UPDATE", (upd) => manager.serverUpdate(upd));
        */
    }
    
} 