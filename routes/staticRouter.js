import express, { Router } from "express";
const staticRouter = express.Router();
import { checkStatus } from "../middlewares/authentication.js";

staticRouter
	.get("/", async (req, res) => {
		res.redirect("/blog");
	})
	.get("/signup", async (req, res) => {
		res.render("signup");
	})
	.get("/login", async (req, res) => {
		res.render("login");
	})
	.get("/logout", async (req, res) => {
		res.clearCookie("token").redirect("/");
	})
	.get("/feedback", checkStatus, async (req, res) => {
		res.render("feedback");
	})
	.get("/addBlog", checkStatus, async (req, res) => {
		res.render("addBlog");
	});

export default staticRouter;
