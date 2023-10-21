import express from "express";
const userRouter = express.Router();
import * as userController from "../controller/userController.js";

userRouter
	.post("/login", userController.handleLogin)
	.post("/signup", userController.handleSignUp)

export default userRouter;
