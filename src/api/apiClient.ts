"use server";
import axios from "axios";
export async function axiosClient() {
  // Define default parameters
  const defaultParams = {
    baseURL: "https://restcountries.com/v3.1/",
    params: {},
  };
  // Create Axios instance with default parameters
  return axios.create(defaultParams);
}
