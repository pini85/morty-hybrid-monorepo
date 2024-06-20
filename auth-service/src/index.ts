import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
import authRoutes from "./routes/authRoutes";
import cors from "cors";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
