import express from "express";
import sequelize from "./db.ts";
import type { Express } from "express";

const app: Express = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Synchronize all models with the database
try {
  await sequelize.sync({ force: false });
  console.log("Database synchronized with relations successfully.");
} catch (error) {
  console.error("Unable to sync the database:", error);
}

// Attach the user routes to the application

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
