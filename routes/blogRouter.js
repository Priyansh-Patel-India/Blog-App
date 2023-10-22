import express, { Router } from "express";
const blogRouter = express.Router();
import * as blogController from "../controller/blogController.js";

blogRouter
	.get("/", blogController.renderBlogs)
	.post("/", blogController.handlePublish);

export default blogRouter;
