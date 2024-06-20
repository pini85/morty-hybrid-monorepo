import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
import cors from "cors";
import characterRoutes from "./routes/characterRoutes";
import { authMiddleware } from "./middlewares/authMiddleWare";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", authMiddleware, characterRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Proxy service running on port ${PORT}`));
