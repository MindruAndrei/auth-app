import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/UserRoutes";
import weatherRouter from "./routes/WeatherRoutes";
import { json } from "body-parser";
import UserEntry from "./models/UserEntry";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

const uri = process.env.MONGO_URI || "";

const seedUsers = async () => {
  try {
    const existingUsersCount = await UserEntry.countDocuments();

    if (existingUsersCount === 0) {
      const seedUsers = {
        name: "Andrei Mindru",
        email: 'andrei@email.com',
        password: 'pass@andrei'
      };

      await UserEntry.create(seedUsers);
      console.log('Users collection seeded successfully.');
    } else {
      console.log('Users collection is not empty. Skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding users collection:', error);
  }
};

mongoose.connect(uri, {}).then(() => seedUsers());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use(json());
app.use("/api/user", userRouter);
app.use("/api/weather", weatherRouter);

export default app;
