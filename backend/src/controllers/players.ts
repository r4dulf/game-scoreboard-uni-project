import { Request, Response } from "express";
import prisma from "../db";
import { AuthRequest } from "../middleware/auth";

export const getPlayers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const players = await prisma.player.findMany({
    select: { id: true, name: true, score: true },
  });
  res.json(players);
};

export const getPlayerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  const player = await prisma.player.findUnique({
    where: { id },
    select: { id: true, name: true, score: true },
  });

  if (!player) {
    res.status(404).json({ error: "Player not found" });
    return;
  }

  res.json(player);
};

export const updateScore = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);
  const { delta } = req.body;

  if (typeof delta !== "number") {
    res.status(400).json({ error: "Missing or invalid 'delta' in body" });
    return;
  }

  if (req.user?.id !== id) {
    res.status(403).json({ error: "Cannot modify another player's score" });
    return;
  }

  const updated = await prisma.player.update({
    where: { id },
    data: {
      score: {
        increment: delta,
      },
    },
    select: { id: true, name: true, score: true },
  });

  res.json(updated);
};

export const deletePlayer = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  const id = parseInt(req.params.id);

  if (req.user?.id !== id) {
    res.status(403).json({ error: "Cannot delete another player" });
    return;
  }

  await prisma.player.delete({ where: { id } });
  res.status(204).send();
};
