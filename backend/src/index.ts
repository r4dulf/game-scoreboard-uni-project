import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

import authRoutes from "./routes/auth";
import playerRoutes from "./routes/players";
import { PORT } from "./vars";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Swagger
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);

console.log("Starting server...");
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
