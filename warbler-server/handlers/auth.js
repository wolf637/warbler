const db = require("../models");
const jwt = require("jsonwebtoken");


exports.signing = function(){}

exports.signup = async function(req, res, next){
	try {
		// create user
		let user = await db.User.create(req.body);
		let {id, username, profileImageUrl} = user
		let token = jwt.sign({
			id,
			username,
			profileImageUrl
		},
		process.env.SECRET_KEY);

		// create token (signing a token)
		return res.status(200).json({
			id, 
			username, 
			token
		})
	} catch(err) {
		if(err.code === 11000){
			err.message = "Sorry, that username and/or email is taken"
		}
		// see what kind of error

		// if it is a certain error

		// respond with username/email already taken

		// otherwise just sent back generic 400

	}
}

