import { AxiosPromise } from "axios";
import { agifyApi, genderApi, nationalizeApi } from "../lib/Api";

export const getGender = async (name: string): AxiosPromise<GenderResponse> => {
  return genderApi.get(`?name=${name}`);
};

export const getNationality = async (
  name: string
): AxiosPromise<NationalizeResponse> => {
  return nationalizeApi.get(`?name=${name}`);
};

export const getAge = async (name: string): AxiosPromise<AgeResponse> => {
  return agifyApi.get(`?name=${name}`);
};
