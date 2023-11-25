import axios from "axios";
import { LoginResponse, User } from "../types/user";
import { makeApiGetRequest, makeApiPostRequest } from "./apiClient";

const BASE_URL = "http://localhost:3001/api/user";

export const login = (email: string, password: string): Promise<LoginResponse> => {
  return axios.post(`${BASE_URL}/auth`, { email, password }).then(resp => resp.data);
};

export const currentUser = (): Promise<User> => {
  return makeApiGetRequest(`${BASE_URL}/me`);
};

export const logout = (): Promise<void> => {
  return makeApiPostRequest(`${BASE_URL}/logout`);
};
