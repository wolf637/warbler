const db = require("../models")

exports.createMessage = async function(req, res, next) {
	try{
		let newMessage = await db.Message.create({
			text: req.body.text,
			user: req.params.id
		})
		let foundUser = await db.User.findById(req.params.id)
		foundUser.messages.push(newMessage.id)
		await foundUser.save()
		let foundMessage = db.Message.findById(newMessage.id).populate("user", {
			username: true,
			profileImageUrl: true
		})
		return res.status(200).json(foundMessage)
	} catch(err){
		next(err)
	}
}

exports.getMessage = async function(req, res, next) {
	
}

exports.deleteMessage = async function(req, res, next) {
	
}