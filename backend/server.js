////Package Imports
import path from "path";
import express from "express"; //express server package
import dotenv from "dotenv"; //allows us to manage .env variables like PORT
import cookieParser from "cookie-parser";


////File Imports
//////Routes
import authRoutes from "./routes/auth.routes.js"; //allows us to use authRoutes
import messageRoutes from "./routes/message.routes.js"; //allows us to use messageroutes
import userRoutes from "./routes/user.routes.js";

//////Database import
import connectToMongoDB from "./db/connectToMongoDB.js"; //allows us to us connectToMongoDB.js 
import { app, server } from "./socket/socket.js"; //adds socket onto of our server so that messages are real time

dotenv.config();//A function allowing us to get the PORT(.env) value in app.listen
//Port will equal port value in .env or 5000

const __dirname = path.resolve();
////Variables
//Create express server
//const app = express();
const PORT = process.env.PORT || 5000;




////Middleware
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);//Route for Authentication allows us to use the url route /api/auth/ + the authroutes we have in auth.routes.js
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


//Checks if server is running
server.listen(PORT, () => {
    connectToMongoDB(); //Allows us to see if we connected to server in terminal.
    console.log(`Server Running on port ${PORT}`);//Allows us to see if server is running in terminal
});
//in package.json in scripts add "server": "node backend/server.js" > this connects to app.listen

