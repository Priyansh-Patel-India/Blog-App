# Project Structure

## Main Files
- **index.js**: Main entry point for the application.
- **config.js**: Configuration file with constants like DB_URL and PORT.

## Controllers
- **blogController.js**: Handles logic related to blogs.
- **userController.js**: Manages user-related operations.

## Middlewares
- **authentication.js**: Middleware functions for user authentication.

## Models
- **blogModel.js**: MongoDB model for the Blog schema.
- **feedbackModel.js**: MongoDB model for the Feedback schema.
- **userModel.js**: MongoDB model for the User schema.

## Routes
- **blogRouter.js**: Defines routes and controllers for blog-related operations.
- **staticRouter.js**: Defines static routes like login, signup, etc.
- **userRouter.js**: Handles user-related routes.

## Service
- **auth.js**: Contains functions for user authentication, token generation, and decoding.

## Views
- **index.ejs**: EJS template for rendering the main blog page.
- **login.ejs**: EJS template for the login page.
- **signup.ejs**: EJS template for the signup page.
- **feedback.ejs**: EJS template for the feedback page.
- **addBlog.ejs**: EJS template for adding a new blog.
- **myBlogs.ejs**: EJS template for displaying user-specific blogs.

# Project Dependencies
- Express
- Mongoose
- EJS
- Jsonwebtoken
- Bcrypt

# Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the MongoDB server.
4. Run the application with `npm start`.
5. Visit [http://localhost:3000](http://localhost:3000) to access the application.

To clone the repository, use the following command:

```bash
git clone https://github.com/Priyansh-Patel-India/Blog-App.git
cd Blog-App
```

