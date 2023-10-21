import User from "../models/userModel.js";
import * as UserService from "../service/auth.js";
import bcrypt from "bcrypt";

export const renderLogin = (req, res) => {
	return res.render("login");
};

export const handleLogin = async (req, res) => {
	const { email, password } = req.body;
	// Finding if User Exist
	const user = await User.findOne({ email });
	if (!user) {
		// Rendering Signup if User doesnot exist
		return res.render("signup", {
			error: "You need to SignUp First",
		});
	}
	// Checking User with correct Password
	const passwordMatch = await bcrypt.compare(password, user.password);
	if (!passwordMatch) {
		// Rerendering Login with an error for Incorrect Password
		return res.render("login", {
			error: "Incorrect Password",
		});
	}
	// Generating Token for each user
	const token = UserService.setUser(user);
	res.cookie("uid", token);
	res.redirect("/");
};

export const renderSignUp = (req, res) => {
	return res.render("signup");
};

export const handleSignUp = async (req, res) => {
	const { name, email, password } = req.body;
	// Find Email if it exists to maintain Unique emails
	const userEmail = await User.findOne({ email });
	if (userEmail) {
		return res.render("signup", {
			error: "Use a unique email",
		});
	}
	// If Email not found Create One
	await User.create({ name, email, password });
	res.redirect("/");
};
