import { db, usersTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const userName = "umer";
  // const userEmail = "umer@email.com";
  // try {
  //   await sql`INSERT INTO users (name, email) VALUES (${userName}, ${userEmail});`;
  // } catch (error) {
  //   return NextResponse.json(error);
  // }

  // getting data from table with simple sql query
  // const users = await sql`SELECT * FROM users;`;

  // getting data from table with drizzle orm
  const users = await db.select().from(usersTable);
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    await db.insert(usersTable).values(body);
    return NextResponse.json("User Successfully added!");
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  try {
    await db
      .update(usersTable)
      .set({ name, email })
      .where(eq(usersTable._id, body._id));
    return NextResponse.json("User Successfully updated!");
  } catch (error) {
    return NextResponse.json(error);
  }
}
