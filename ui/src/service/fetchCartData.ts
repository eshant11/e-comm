import axios from "axios";

export const fetchCartDataFromApi = async (email: string | undefined) => {
  try {
    const response = await axios.get("http://localhost:8080/api/cart", {
      params: {
        email: email,
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
