const auth = require("./auth.json")
const Discord = require("discord.js")
var client = new Discord.Client({
	intents: ["GuildMessages"],
})

var slashCommands = require("./commandHandler.js")

client.login(auth.token)
client.on("ready", () => {
	console.log("Ready!")
})

client.on("messageCreate", (message) => {})

client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return
    if (!interaction.inGuild()) return
    switch (interaction.commandName) {
        case "enable":
            
            break
        case "disable":
            break
    
    }
})
