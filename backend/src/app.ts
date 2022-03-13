import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import db from "./database";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 80;

app.use(cors(), morgan("dev"), express.json());

app.get("/", (req, res) => {
  res.send(
    `Use './quotes' endpoint with GET method to get the available quotes!`
  );
});

app.get("/quotes", async (req, res) => {
  const availableQuotes = await db.query("SELECT text, author FROM quotes");
  res.send(availableQuotes.rows).status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});

export default app;
