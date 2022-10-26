import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../config/config";

export const getData = async (dataType: string, searchValue?: string) => {
 const data = await axios.get(`${BASE_URL}/${dataType}`, {
	params: {name: searchValue}
  })

  return data.data
}
