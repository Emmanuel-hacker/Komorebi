
import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { User, Message } from "discord.js";
import { join } from "path";
import { prefix, owners,  token, dbName } from "../Config"
import { Connection } from "typeorm"
import Database from '../structures/Database'
import { Manager } from "lavaclient"

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
        db: Connection
    }
}

interface BotOptions {
    token?: string;
    owners?: string[];

    
}

const nodes = [
    {
      id: "KomoNode",
      host: "localhost",
      port: 2333,
      password: "youshallnotpass"
    }
  ]
  

export default class KomoClient extends AkairoClient {
    public music: Manager = new Manager(nodes, {
        shards: this.shard ? this.shard.count : 1,
        send: (id, payload) => {
          const guild = this.guilds.cache.get(id);
          if (guild) return guild.shard.send(payload);
          return;
        },
      });
    
    public config: BotOptions;
    public db!: Connection
    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "..", "listeners")
    });


    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "..", "commands"),
        prefix: prefix,
        allowMention: true,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        defaultCooldown: 0,
        argumentDefaults: {
            prompt: {
                modifyStart: (_: Message, str: string): string =>`${str}\n\nType \`cancel\` to cancel the command...`,
                modifyRetry: (_: Message, str: string): string =>`${str}\n\nType \`cancel\` to cancel the command...`,
                timeout: "You took too long, the command has been cancelled.",
                ended: "You exceeded the maximum amount of tries, the command has been cancelled.",
                cancel: "This command has been cancelled.",
                retries: 3,
                time: 3e4
            },
            otherwise: ""
        },
        ignorePermissions: owners
    });

    public constructor(config: BotOptions) {
        super({
            ownerID: config.owners
        });

        this.config = config;
    }

    private async _init(): Promise<void> {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            music: this.music,
            websocket: this.ws,
            process
        });

        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();

        this.db = Database.get(dbName)
        await this.db.connect()
        await this.db.synchronize()
        await this.music.init(this.user.id)
    }

public async start(): Promise<string> {
    await this._init();
    return this.login(this.config.token);
}
    
}
