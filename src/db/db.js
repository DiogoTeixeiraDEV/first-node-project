
import postgres from "postgres";

export const sql = postgres({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME || 'movies',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
});