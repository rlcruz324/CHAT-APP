import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6, //Passwords have to have at least 6 characters
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema); //Inserts User into Database

export default User;//Allows us to use our User Model in our files