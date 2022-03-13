import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_HOST);

const db: Pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

(async function () {
  await db.query();
});

export default db;
