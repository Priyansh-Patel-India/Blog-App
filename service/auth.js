import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

// Setting Token for User
export const setUser = (user) => {
	return jwt.sign(
		{
			_id: user.id,
			email: user.email,
		},
		SECRET_KEY
	);
};

// Getting Token from User
export const getUser = (token) => {
	if (!token) {
		return null;
	}
	return jwt.verify(token, SECRET_KEY);
};

// Decoding Token
export const decodeToken = (token) => {
	try {
		const decoded = jwt.verify(token, SECRET_KEY);
		return decoded;
	} catch (error) {
		// Handle token verification errors
		console.error("Error decoding token:", error);
		return null;
	}
};
