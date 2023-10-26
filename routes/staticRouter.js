import express, { Router } from "express";
const staticRouter = express.Router();
import { checkStatus } from "../middlewares/authentication.js";
import FeedBack from "../models/feedbackModel.js";

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
	})
	.get("/myBlogs", checkStatus, async (req, res) => {
		res.render("myBlogs");
	})
	.post("/feedback", async (req, res) => {
		const { feedback } = req.body;
		await FeedBack.create({ feedback });
		res.redirect("/");
	});

export default staticRouter;
