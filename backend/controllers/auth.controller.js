import bcrypt from "bcryptjs";//allows you to hash passwords
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

////Signup Function
export const signup = async(req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body;
		//check if passwords match
		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		//Check is username already exists
		const user = await User.findOne({ username });
		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		//Hash Password so if a hacker saw the database they wouldn't be able to see your passwords
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// https://avatar-placeholder.iran.liara.run/
		//Using an api located at the link for default profile pics which the tutorial seprates by a binary gender
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}` //boy
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`//girl

		//Creates User
		const newUser = new User({
			fullName,
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});//if user == male boypfp else girlpfp

		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save(); //sends user info to database

			//send as a response
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			}); //sucessfully created status code 201 and pass the user to terminal
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}

	} catch (error) {
		console.log("Error in signup controller", error.message);//pass error messege to terminal
		res.status(500).json({ error: "Internal Server Error" });
	}

};

////Login Function
export const login = async(req, res) => {
	try {
		//get input from user
		const { username, password } = req.body;
		//check if user exists
		const user = await User.findOne({ username });
		//compares passwords
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
		//If either password or username fails return error
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
		//generates the token and sets the cookie
		generateTokenAndSetCookie(user._id, res);
		//send this response
		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

////Logout Function
export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 }); //Clear cookies
		res.status(200).json({ message: "Logged out successfully" }); //logout success message
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};


