import { sql } from "@vercel/postgres";
// import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

import { NextResponse } from "next/server";

// creating table with simple sql query
export async function GET(request: Request) {
  try {
    const response = await sql`CREATE TABLE users (
        _id serial primary key,
        name varchar(40) not null,
        email varchar(30) not null);`;
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}

// creating table with drizzle orm
// export async function GET(request: Request) {
//   try{
//     const usersTable = pgTable(
//       'users',
//       {
//         _id: serial('id').primaryKey(),
//         name: varchar('name').notNull(),
//         email: varchar('email').notNull(),
//       },
//     );
//   } catch (error) {
//     NextResponse.json(error);
//   }
// }
