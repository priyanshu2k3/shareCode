import { NextRequest, NextResponse } from "next/server";
const shortid = require('shortid');
const crypto = require('crypto');


export async function GET(request:NextRequest) {
 
  const crypto = require('crypto');

  function generateShortIdFromIp(ip:any) {
    // Hash the IP address using SHA-256
    const hash = crypto.createHash('sha256').update(ip).digest('hex');
    
    // Take the first 8 characters of the hash as the short ID
    const shortId = hash.substring(0, 8);
    
    return shortId;
  }
  
  // Example usage
  const ip = '192.168.1.1';
  const shortId = generateShortIdFromIp(ip);
  console.log(`Short ID for IP ${ip}: ${shortId}`);
  
  
  return NextResponse.json({ msg: "hey from the get route hello server is working fine from "});

}
export async function PUT(request:NextRequest) {
  const body = await request.json();

  console.log("Request :: Body :: ", body);
  return NextResponse.json({ msg: "hey from the  put route hello server is working fine " });

}

export async function POST(request:NextRequest) {
  const body = await request.json();

  console.log("Request :: Body :: ", body);
  return NextResponse.json({ msg: "hey from the post route hello server is working fine " });

}


export async function DELETE(request:NextRequest) {
  const body = await request.json();

  console.log("Request :: Body :: ", body);
  return NextResponse.json({ msg: "hey from the delete route hello server is working fine " });

}