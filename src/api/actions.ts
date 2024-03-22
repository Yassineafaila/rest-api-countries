"use server";
import { AxiosPromise } from "axios";
import { axiosClient } from "./apiClient";
export async function QueryCountries(): Promise<[]> {
  return (await axiosClient())
    .get("/all")
    .then((res) => res.data)
    .catch((error) => error);
}
