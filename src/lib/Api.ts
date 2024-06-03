import axios from "axios";

export const genderApi = axios.create({
  baseURL: "https://api.genderize.io",
  timeout: 1000,
});

genderApi.interceptors.response.use((res) => {
  if (res.data.gender !== "female") {
    throw Error("Is not female");
  }

  if (res.data.count % 2 === 0) {
    throw Error("Random Error");
  }

  return res;
});

export const nationalizeApi = axios.create({
  baseURL: "https://api.nationalize.io",
  timeout: 1000,
});

export const agifyApi = axios.create({
  baseURL: "https://api.agify.io",
  timeout: 1000,
});

// Include new Custom Auth Header x-auth-ztaytuz
