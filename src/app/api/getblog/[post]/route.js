import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET(Request, { params }) {
  try {
    const file = fs.readFileSync(`src/blogdata/${params.post}.json`, 'utf-8');
    const objectData = JSON.parse(file);
    return NextResponse.json({ success: true, objectData });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'no such blog found'},{ status: 404 });
}
}