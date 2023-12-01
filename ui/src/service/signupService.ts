import React from "react";
import axios from "axios";
import { UserData } from "../components/interface";

const signupService = async (formData: UserData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/signUp",
      formData
    );
    console.log("Signup successful:", response.data);
    return response;
  } catch (error) {
    console.error("Signup failed:", error);
    return null;
  }
};

export default signupService;
