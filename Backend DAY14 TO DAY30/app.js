import express from "express";
import dotenv from "dotenv";
import Userrouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", Userrouter);

export default app;