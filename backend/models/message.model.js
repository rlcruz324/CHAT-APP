import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", //sender id will be id from user model
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId, 
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt fields => messsage created at time
	},
	{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema); //create messages collection with this schema

export default Message;
