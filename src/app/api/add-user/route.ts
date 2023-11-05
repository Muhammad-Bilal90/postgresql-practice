import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const userName = "umer";
  // const userEmail = "umer@email.com";
  // try {
  //   await sql`INSERT INTO users (name, email) VALUES (${userName}, ${userEmail});`;
  // } catch (error) {
  //   return NextResponse.json(error);
  // }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json(users.rows);
}
