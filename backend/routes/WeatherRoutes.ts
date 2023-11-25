import express from "express";

import {
  getWeather
} from "../controllers/WeatherController";
import { verify } from "../services/AuthenticationService";

const router = express.Router();

router.get("/", verify, getWeather);

export default router;
