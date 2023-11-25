import express from "express";

import {
  auth,
  currentUser,
  logout,
} from "../controllers/UsersController";
import { verify } from "../services/AuthenticationService";

const router = express.Router();

router.post("/logout", logout);
router.post("/auth", auth);
router.get("/me", verify, currentUser);

export default router;
