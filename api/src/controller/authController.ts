import { Request, Response } from "express";
import { signIn, signUp } from "../service/authService";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await signIn(email, password);
    res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Authentication failed." });
  }
};

export const signUpHandler = async (req: Request, res: Response) => {
  try {
    // Call the signup function from your service
    const message = await signUp(req.body);
    if (message.message == "User already Exist.") {
      res.status(200).json({ message: message.message });
    } else {
      res.status(201).json({ message: "User Signed Up Successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed." });
  }
};
