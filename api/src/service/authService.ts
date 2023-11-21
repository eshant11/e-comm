import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface userDetails {
  userName: string;
  password: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  confirm_Password: string;
  gender: string;
}

//Login Function
export const signIn = async (email: string, password: string) => {
  // Find the user by username
  const user = await User.findOne({ email: email });

  if (!user) throw { message: "Authentication failed." };
  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password ?? "");

  if (!isPasswordValid) {
    throw { message: "Authentication failed." };
  }

  // Generate a JSON Web Token (JWT)
  const token = jwt.sign({ userId: user._id }, "your-secret-key", {
    expiresIn: "1h",
  });

  return token;
};

//Signup function
export const signUp = async (userDetails: userDetails) => {
  // Check if the username already exists
  const existingUser = await User.findOne({ email: userDetails.email });
  console.log(existingUser);
  if (existingUser) {
    return { message: "User already Exist." };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(userDetails.password, 10);

  // Create a new user/document
  const newUser = new User({
    userName: userDetails.userName,
    password: hashedPassword,
    fullName: userDetails.fullName,
    email: userDetails.email,
    phoneNumber: userDetails.phoneNumber,
    gender: userDetails.gender,
  });

  await newUser.save();

  return { message: "Signup successful." };
};
