import express from "express";
const app = express();
import mongoose from "mongoose";
import { DB_URL, PORT } from "./config.js";
import path from "path";
import cookieParser from "cookie-parser";
import { authenticateUserFromCookies } from "./middlewares/authentication.js";

// Routes
import userRouter from "./routes/userRouter.js";
import staticRouter from "./routes/staticRouter.js";
import blogRouter from "./routes/blogRouter.js";

// Middle Wares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.use("/", staticRouter);
app.use("/blog", authenticateUserFromCookies, blogRouter);
app.use("/user", userRouter);

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("DataBase Connected");
		app.listen(PORT, () => console.log("Server Connected"));
	})
	.catch((err) => {
		console.log({ message: err });
	});
