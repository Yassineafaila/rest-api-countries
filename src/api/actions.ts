"use server";
import { AxiosPromise } from "axios";
import { axiosClient } from "./apiClient";
import { error } from "console";
import { Root } from "@/constants/types";
interface IProps {
  search: string;
}
export async function QueryCountries(
  search: string,
  filterBy: string
): Promise<Root[] | undefined> {
  if (search) {
    return (await axiosClient())
      .get(`/name/${search}`)
      .then((res) => res.data)
      .catch((error) => error.data);
  } else if (filterBy) {
    return (await axiosClient())
      .get(`/region/${filterBy}`)
      .then((res) => res.data)
      .catch((error) => error.data);
  } else {
    return (await axiosClient())
      .get("/all")
      .then((res) => res.data)
      .catch((error) => error);
  }
}
export async function QueryCountry(
  countryName: string
): Promise<Root[]> {
  return (await axiosClient())
    .get(`name/${countryName}?fullText=true`)
    .then((res) => res.data)
    .catch((error) => error.data);
}
