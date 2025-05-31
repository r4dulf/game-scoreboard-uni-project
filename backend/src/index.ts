import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import playerRoutes from "./routes/players";
import authRoutes from "./routes/auth";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./src/swagger.yaml");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/players", playerRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
