import axios from "axios";


const API_URL = "http://localhost:8080/api/foods";
export const addFood = async (fooodData, image) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(fooodData)); // same as backend
  formData.append("file", image);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {
    // console.log('error', e);
    alert("error adding food");
    throw e;
  }
};

export const getFoodList = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data)
    
  
    return response.data;
  } catch (error) {
    console.log("error fetching food list", error);
    throw error;
  }
};

export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(API_URL + "/" + foodId);
    
    return response.status === 204;
  } catch (error) {
    console.log("error while deleting the food");
    throw error;
  }
};
