import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "@/server/schema"

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

//@ts-ignore
await client.connect();

export const db = drizzle(client, { schema });