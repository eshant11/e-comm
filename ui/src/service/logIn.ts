import axios from "axios";
import { LoginForm } from "../components/login/Login";

export const logIn = async (loginDetails: LoginForm) => {
  try {
    const response = await axios.post("http://localhost:8080/api/login", {
      username: loginDetails.userName,
      password: loginDetails.password,
    });
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};
