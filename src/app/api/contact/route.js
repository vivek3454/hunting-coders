import { NextResponse } from "next/server";
import fs from 'fs';

export async function POST(request) {
    let data = await request.json();
    const file = fs.readdirSync('src/contactdata');
    fs.writeFileSync(`src/contactdata/${file.length+1}.json`, JSON.stringify(data))
    return NextResponse.json(data)
}