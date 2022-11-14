const mongoose = require("mongoose")

var Server = mongoose.Schema({
	Channels: { type:[String] , required: true },
	serverID: { type: String, required: true },
})

module.exports = mongoose.model("Server", Server)
