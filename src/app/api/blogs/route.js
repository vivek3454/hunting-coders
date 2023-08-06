import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET(Request) {
  const file = fs.readdirSync('src/blogdata');
  return NextResponse.json(file);
}