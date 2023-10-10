// Import required modules
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import * as authController from "./controller/authController";
import * as productController from "./controller/productController";

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

// Signup route
app.post("/api/signUp", authController.signUpHandler);

// Authentication route
app.post("/api/login", authController.login);

// Define product routes
//get all products
app.get("/api/search", productController.getAllProducts);

//sweet
app.get("/api/product/sweet", productController.getSweetProducts);

//namkeen
app.get("/api/product/namkeen", productController.getNamkeenProducts);

//namkeen
app.get("/api/product/cookies", productController.getCookiesProducts);

//namkeen
app.get("/api/product/cakes", productController.getCakesProducts);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
