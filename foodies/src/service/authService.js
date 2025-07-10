import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const registerUser = async (data) => {
    try {
        const response = await axios.post(API_URL + "/register", data);
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const loginUser = async (data) => {
  try {
    const response = await axios.post(API_URL + "/login", data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

