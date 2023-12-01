import mongoose from "mongoose";

// Create a Mongoose schema for User
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true, // Ensures usernames are unique
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true, // Ensures emails are unique
    required: true,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true, // You can remove this if phone numbers don't need to be unique
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // You can define your own gender options
    default: "Other",
  },
  id: Number,
  profileImage: {
    data: Buffer, // Binary image data
    contentType: String, // Content type of the image (e.g., 'image/jpeg')
  },
});

//Creating a model

const User = mongoose.model("User", userSchema);

export default User;
