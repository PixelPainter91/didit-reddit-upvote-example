import "dotenv/config";
import { Pool } from "pg";

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 30000, 
  query_timeout: 30000, 
});