import { Schema, model } from "mongoose";

const feedBackSchema = new Schema(
	{
		feedback: {
			type: String,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const FeedBack = model("FeedBack", feedBackSchema);
export default FeedBack;
