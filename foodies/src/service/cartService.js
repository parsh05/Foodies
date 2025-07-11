
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/api/cart";

export const addToCart = async (foodId, token) => {
  try {
    await axios.post(
      API_URL,
      { foodId: foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error('error while adding food to Cart')
    throw error
  }
};

export const removeQtyFromCart = async (foodId, token) => {
  try {
    await axios.post(
      API_URL + "/remove",
      { foodId: foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("error while deleting food from Cart");
    throw error;
  }
};
  

export const getCartData = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.items;

  } catch (error) {
    toast.error("error while getting food from Cart");
    throw error;
  }
};
