import express from "express";
//The following imports the functions login, logout, and signup from controllers.js
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login); //sends us to login route

router.post("/logout", logout);

export default router;
