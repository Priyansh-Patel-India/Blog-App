import User from "../models/userModel.js";
import * as UserService from "../service/auth.js";

export async function authenticateUserFromCookies(req, res, next) {
	const userToken = req.cookies?.token;

	try {
		// Get Token of the User if userToken Exist
		const user = UserService.getUser(userToken);

		if (user) {
			const fullDetails = await User.findById(user._id);
			req.user = fullDetails;
		}
		next();
	} catch (error) {
		// Handle token verification errors
		console.error("Error decoding token:", error);
		// You might want to clear the cookie or redirect to login
		res.clearCookie("token");
		res.redirect("/login");
	}
}

export async function checkStatus(req, res, next) {
	const userToken = req.cookies?.token;

	// Check if User is Logged In
	if (!userToken) {
		return res.render("login", {
			error: "You need to Login First",
		});
	}

	// If User Exists
	const user = UserService.getUser(userToken);
	const fullDetails = await User.findById(user._id);
	req.user = fullDetails;
	next();
}
