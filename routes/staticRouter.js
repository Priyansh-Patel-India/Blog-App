import express, { Router } from "express";
const staticRouter = express.Router();

staticRouter
	.get("/signup", async (req, res) => {
		res.render("signup");
	})
	.get("/login", async (req, res) => {
		res.render("login");
	});

export default staticRouter;
