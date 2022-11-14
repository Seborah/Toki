const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder, ContextMenuCommandBuilder } = require("@discordjs/builders")
const { clientID, token } = require("./auth.json")

const commands = [
	new SlashCommandBuilder().setName("enable").setDescription("Re-enable Toki Trolling in this channel.").setDefaultMemberPermissions("0"),
	new SlashCommandBuilder().setName("disable").setDescription("Disable Toki Trolling in this channel").setDefaultMemberPermissions("0")
].map((command) => command.toJSON())

const rest = new REST({ version: "9" }).setToken(token)

;(async () => {
	try {
		console.log("Started refreshing application (/) commands.")

		await rest.put(Routes.applicationCommands(clientID), { body: commands })

		console.log("Successfully reloaded application (/) commands.")
	} catch (error) {
		console.error(error)
	}
})()
