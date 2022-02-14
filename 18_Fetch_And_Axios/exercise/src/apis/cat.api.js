import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1/breeds";

export const fetchCatData = async () => {
  return await axios.get(baseURL);
};