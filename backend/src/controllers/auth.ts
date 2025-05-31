import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../db";
import { JWT_SECRET } from "../vars";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).json({ error: "Name and password are required" });
    return;
  }

  const existing = await prisma.player.findUnique({ where: { name } });
  if (existing) {
    res.status(409).json({ error: "Player already exists" });
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.player.create({
    data: {
      name,
      password: hashed,
    },
  });

  res.status(201).json({ message: "Player registered successfully" });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { name, password } = req.body;

  const player = await prisma.player.findUnique({ where: { name } });

  if (!player || !(await bcrypt.compare(password, player.password))) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ id: player.id, name: player.name }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};
