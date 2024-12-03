import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router(); //create router

router.get("/:id", protectRoute, getMessages);
//send message
router.post("/send/:id", protectRoute, sendMessage); //uses sendMessage from out controller message.controller,js


export default router;
