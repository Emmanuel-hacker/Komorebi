"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const fetch = __importStar(require("node-fetch"));
class MemeCommand extends discord_akairo_1.Command {
    constructor() {
        super('meme', {
            aliases: ['meme'],
            description: {
                content: 'A meme command that fetches a random meme'
            },
            category: 'Fun',
            ratelimit: 2
        });
    }
    async exec(message) {
        fetch("https://meme-api.herokuapp.com/gimme")
            .then((res) => res.json())
            .then((body) => {
            let embed = new discord_js_1.MessageEmbed()
                .setTitle(body.title)
                .setImage(body.url)
                .setFooter(`From r/${body.subreddit}`)
                .setURL(body.postLink)
                .setColor("RANDOM");
            return message.util.send(embed);
        });
    }
}
exports.default = MemeCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9GdW4vTWVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBd0M7QUFDeEMsMkNBQWtEO0FBQ2xELGtEQUFtQztBQUVuQyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsMkNBQTJDO2FBQ3ZEO1lBQ0QsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQzlCLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQzthQUN4QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQUksS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTtpQkFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNsQixTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFbkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FDSjtBQTVCRCw4QkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCJcbmltcG9ydCB7IE1lc3NhZ2VFbWJlZCwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCJcbmltcG9ydCAqIGFzIGZldGNoIGZyb20gXCJub2RlLWZldGNoXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdtZW1lJywge1xuICAgICAgICAgICAgYWxpYXNlczogWydtZW1lJ10sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBIG1lbWUgY29tbWFuZCB0aGF0IGZldGNoZXMgYSByYW5kb20gbWVtZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXRlZ29yeTogJ0Z1bicsXG4gICAgICAgICAgICByYXRlbGltaXQ6IDJcbiAgICAgICAgfSlcbiAgICB9XG5cblxucHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9tZW1lLWFwaS5oZXJva3VhcHAuY29tL2dpbW1lXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChib2R5KSA9PiB7XG4gICAgICAgICAgICBsZXQgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcbiAgICAgICAgICAgIC5zZXRUaXRsZShib2R5LnRpdGxlKVxuICAgICAgICAgICAgLnNldEltYWdlKGJvZHkudXJsKVxuICAgICAgICAgICAgLnNldEZvb3RlcihgRnJvbSByLyR7Ym9keS5zdWJyZWRkaXR9YClcbiAgICAgICAgICAgIC5zZXRVUkwoYm9keS5wb3N0TGluaylcbiAgICAgICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoZW1iZWQpXG4gICAgICAgIH0pXG5cbiAgICB9XG59Il19