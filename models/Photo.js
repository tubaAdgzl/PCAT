const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PhotoSchema = new Schema({
	title : {
		type:String,
		required:true
	},
	image:{
		type.String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	createdAt:{
		type:Date,
		default:Date.now
	}
})

const Photo = mongoose.model("Photo",PhotoSchema)

module.exports = Photo