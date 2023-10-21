import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profileImageURL: {
			type: String,
			default: "/images/default.png",
		},
		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	try {
		// Generate Salt
		const salt = await bcrypt.genSalt(10);
		// Create hashed password with salt
		const hashedPassword = await bcrypt.hash(this.password, salt);
		// Changing password to hashedPassword
		this.password = hashedPassword;
		next();
	} catch (error) {
		next(error);
	}
});

const User = model("User", userSchema);
export default User;
