import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY 
		const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

// import Conversation from "../models/conversation.model.js";
// import Message from "../models/message.model.js";
// //import { getReceiverSocketId, io } from "../socket/socket.js";

// export const sendMessage = async (req, res) => {
// 	try {
// 		const { message } = req.body; //get message from user as input
// 		const { id: receiverId } = req.params; //get the user id from params rename it to receiver id
// 		const senderId = req.user._id;

// 		//conversation between two users
// 		let conversation = await Conversation.findOne({
// 			participants: { $all: [senderId, receiverId] },
// 		});

// 		if (!conversation) {
// 			conversation = await Conversation.create({
// 				participants: [senderId, receiverId],
// 			});
// 		} /// conversation does not exit we create one with these participants 

// 		const newMessage = new Message({
// 			senderId,
// 			receiverId,
// 			message,
// 		});//put messages into messages array

// 		if (newMessage) {
// 			conversation.messages.push(newMessage._id);
// 		}

// 		//await conversation.save();
// 		//await newMessage.save();

// 		// this will run in parallel
// 		await Promise.all([conversation.save(), newMessage.save()]);

// 		// SOCKET IO FUNCTIONALITY WILL GO HERE
// 		// const receiverSocketId = getReceiverSocketId(receiverId);
// 		// if (receiverSocketId) {
// 		// 	// io.to(<socket_id>).emit() used to send events to specific client
// 		// 	io.to(receiverSocketId).emit("newMessage", newMessage);
// 		// }

// 		res.status(201).json(newMessage); //send message as a response
// 	} catch (error) {
// 		console.log("Error in sendMessage controller: ", error.message);
// 		res.status(500).json({ error: "Internal server error" });
// 	}
// };

// export const getMessages = async (req, res) => {
// 	try {
// 		const { id: userToChatId } = req.params;
// 		const senderId = req.user._id;

// 		const conversation = await Conversation.findOne({
// 			participants: { $all: [senderId, userToChatId] },
// 		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES > returns a array of objects that is the message itself

// 		if (!conversation) return res.status(200).json([]);

// 		const messages = conversation.messages;

// 		res.status(200).json(messages);
// 	} catch (error) {
// 		console.log("Error in getMessages controller: ", error.message);
// 		res.status(500).json({ error: "Internal server error !!!!!" });
// 	}
// };
