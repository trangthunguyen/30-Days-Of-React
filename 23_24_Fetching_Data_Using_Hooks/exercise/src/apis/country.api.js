import axios from "axios";

const baseURL = "https://restcountries.com/v2/all"

export const fetchCountryData = () => {
    return axios.get(baseURL)
}