// Import required modules
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import * as authController from "./controller/authController";
import * as productController from "./controller/productController";
import * as uploadImageController from "./controller/uploadImageController";

const cors = require("cors");
// Create an Express application
const app = express();

// Connect to your MongoDB database
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("connections successfull"))
  .catch((error) => console.log(error));

// Middleware for JSON parsing
app.use(express.json());

// Use the CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with the actual origin of your frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (cookies, authorization headers)
  })
);

// Middleware for handling errors
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong." });
});

// app.use(express.urlencoded({ extended: false }));
// // Multer configuration for handling image uploads
// const multer = require("multer");
// // Set up storage using disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the destination folder where uploaded files will be stored
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     // Specify the filename for the uploaded file
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// const upload = multer({ storage: storage });

// Signup route
app.post("/api/signUp", authController.signUpHandler);

// Authentication route
app.post("/api/login", authController.login);

// for social login
app.get("/api/social-login/:email", authController.socialLoginHandler);

// Define product routes
//get all products
app.get("/api/search", productController.searchProducts);

//sweet
app.get("/api/product/sweet", productController.getSweetProducts);

//namkeen
app.get("/api/product/namkeen", productController.getNamkeenProducts);

//namkeen
app.get("/api/product/cookies", productController.getCookiesProducts);

//namkeen
app.get("/api/product/cakes", productController.getCakesProducts);

// Route for image upload
// app.post(
//   "/api/upload",
//   upload.single("image"),
//   uploadImageController.uploadImageHandler
// );

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
