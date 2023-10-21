export const renderBlog = async (req, res) => {
	const authenticatedUser = req.user;

	res.render("index", { user: authenticatedUser });
};
