import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);

// Create a pgTable that maps to a table in your DB
export const usersTable = pgTable("users", {
  _id: serial("_id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
});

// export const getExampleTable = async () => {
//   const selectResult = await db.select().from(usersTable);
//   console.log("Results", selectResult);
// };
