import { WeatherResponse } from "../types/weather";
import { makeApiGetRequest } from "./apiClient";

const BASE_URL = "http://localhost:3001/api/weather";

export const getWeatherData = (): Promise<WeatherResponse> => {
  return makeApiGetRequest(BASE_URL);
};
