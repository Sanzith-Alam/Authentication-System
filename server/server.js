import express, { request } from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";


import connectDB from "./config/mongodb.js";
import authRouther from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = [
    "http://localhost:5173",
    
  ];
  


app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }))

//Api Endpoints
app.get('/',(req, res)=>res.send("API Working fine"));
app.use('/api/auth', authRouther)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
