import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

export default app;