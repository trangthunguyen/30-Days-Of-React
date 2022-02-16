import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1/breeds";

export const fetchCatData = () => {
  return axios.get(baseURL);
};

export const getCatImage = (id) => {
  const url = 'https://api.thecatapi.com/v1/images/search?breed_id='
  return axios.get(`${url}${id}`)
}