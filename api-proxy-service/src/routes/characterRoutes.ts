import { Router } from "express";
import {
  getCharacters,
  getFilterCharacter,
} from "../controllers/characterControllers";
import { authMiddleware } from "../middlewares/authMiddleWare";

const router = Router();

router.get("/characters", authMiddleware, getCharacters);
router.get("/character", authMiddleware, getFilterCharacter);

export default router;
