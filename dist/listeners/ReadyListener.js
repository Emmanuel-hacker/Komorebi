"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`${this.client.user.tag} has started and should be online.`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lcnMvUmVhZHlMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9DQUFvQyxDQUFDLENBQUE7SUFDNUUsQ0FBQztDQUNKO0FBWEQsZ0NBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhZHlMaXN0ZW5lciBleHRlbmRzIExpc3RlbmVyIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInJlYWR5XCIsIHtcclxuICAgICAgICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcclxuICAgICAgICAgICAgZXZlbnQ6IFwicmVhZHlcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiY2xpZW50XCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jbGllbnQudXNlci50YWd9IGhhcyBzdGFydGVkIGFuZCBzaG91bGQgYmUgb25saW5lLmApXHJcbiAgICB9XHJcbn0gIl19