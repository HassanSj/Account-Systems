const mongoose = require('mongoose')

const GooogleUser = new mongoose.Schema(
	{
      
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		
		
	},
	{ collection: 'googleauth' }
)


const GoogleData = mongoose.model('GoogleData', GooogleUser)



module.exports = GoogleData