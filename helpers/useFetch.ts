import axios, { AxiosRequestConfig } from "axios";
export default async function useFetch(
  url: string,
  config?: AxiosRequestConfig
) {
  try {
    const res = config ? await axios.get(url, config) : await axios.get(url);
    return res.data;
  } catch (error) {
    return console.error(`An error occured!\n ${error.message}`);
  }
}
