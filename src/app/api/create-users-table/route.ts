import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

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
