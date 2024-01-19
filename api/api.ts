import axios from "axios";
import { baseApi } from "./../config/config";

export const getUsers = async () => {
  return await axios.get(`${baseApi}/users`);
};
export const getUser = async (userId: string) => {
  return axios.get(`${baseApi}/users/${userId}`);
};
