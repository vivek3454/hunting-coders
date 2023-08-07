import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET(Request) {
  let allBlogs = [];
  const filePaths = fs.readdirSync('src/blogdata');
  filePaths.forEach(filePath => {
    let file = fs.readFileSync('src/blogdata/' + filePath, 'utf-8');
    allBlogs.push(JSON.parse(file));
  });
  return NextResponse.json(allBlogs);
}