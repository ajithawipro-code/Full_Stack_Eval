import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { dbHealthCheck } from "./utils/dbHealthCheck.js";
import { authRoute } from "./routes/authRoutes.js";
import { accountRoute } from "./routes/accountRoutes.js";

dotenv.config();

const app=express();

// app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:5173"
    
  ],
  credentials: true
}));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api", accountRoute);


const PORT = process.env.PORT;

app.listen(PORT, async ()=>{

    await dbHealthCheck();

    console.log(`Server running on port ${PORT}`);
})