import { Schema, model } from "mongoose";

const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		blog: {
			type: String,
			required: true,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Blog = model("Blog", blogSchema);
export default Blog;
