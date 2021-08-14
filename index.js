// Default imports
const { Plugin } = require("powercord/entities");
const { get } = require("powercord/http");

module.exports = class valorantStats extends Plugin {
    startPlugin(){
        powercord.api.commands.registerCommand({
            command: 'val',
            description: 'Get Valorant Stats',
            usage: '{c} [region] [name] [tag]',
            executor: async (args) => {
                console.log(args);
            }
        });    
    }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('val');
    }
};