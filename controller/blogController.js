import Blog from "../models/blogModel.js";

export const renderBlogs = async (req, res) => {
	try {
		const authenticatedUser = req.user;
		const allBlogs = await Blog.find()
			.populate({
				path: "createdBy",
				select: "name",
			})
			.select("title blog");

		res.render("index", { user: authenticatedUser, blogs: allBlogs });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

export const handlePublish = async (req, res) => {
	const { title, blog } = req.body;

	try {
		await Blog.create({
			title: title,
			blog: blog,
			createdBy: req.user._id,
		});

		const allBlogs = await Blog.find()
			.populate({
				path: "createdBy",
				select: "name",
			})
			.select("title blog");

		res.render("index", { user: req.user, blogs: allBlogs });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};
