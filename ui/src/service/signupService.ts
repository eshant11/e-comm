import React from "react";
import axios from "axios";
import { FormData } from "../components/interface";

const signupService = async (formData: FormData) => {
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
