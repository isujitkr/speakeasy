import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from 'morgan'
import appRouter from "./routes/index.js";

config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//remove it in production
app.use(morgan('dev'));

app.use('/api/v1', appRouter);

export default app;