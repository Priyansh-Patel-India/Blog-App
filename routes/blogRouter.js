import express, { Router } from "express";
const blogRouter = express.Router();
import * as blogController from "../controller/blogController.js";

blogRouter.get("/", blogController.renderBlog);

export default blogRouter;
