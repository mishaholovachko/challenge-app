import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../config/config";

export const getData = (dataType: string): Promise<AxiosResponse> =>
	axios.get(`${BASE_URL}/${dataType}`)