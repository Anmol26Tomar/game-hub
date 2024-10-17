import axios, { AxiosRequestConfig, RawAxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
      key:'f0e3dc1beebd483e9dd40fd5787faaf7'
    },
});
/* key: "c7b18323a47d40c394ea5b019646b1f5", */
class APIClient<T>{
  endpoint:string;
  constructor(endpoint:string) {
    this.endpoint=endpoint;
  }
  getAll = (config:AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint,config)
    .then(res=>res.data);
  }
}
export default APIClient;