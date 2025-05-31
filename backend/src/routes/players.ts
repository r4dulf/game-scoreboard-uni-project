import { Router } from "express";
import {
  getPlayers,
  updateScore,
  getPlayerById,
  deletePlayer,
} from "../controllers/players";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.patch("/:id/score", authenticateToken, updateScore);
router.delete("/:id", authenticateToken, deletePlayer);

export default router;
