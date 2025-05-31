import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.player.deleteMany(); // Clear existing data

  const players = [];

  for (let i = 1; i <= 20; i++) {
    players.push({
      name: `player${i}`,
      password: `pass${i}`, // Simple demo passwords
    });
  }

  for (const player of players) {
    const hashed = await bcrypt.hash(player.password, 10);

    await prisma.player.create({
      data: {
        name: player.name,
        password: hashed,
        score: 0,
      },
    });
  }

  console.log("✅ Seeded 20 players.");
};

main()
  .catch((err) => {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
