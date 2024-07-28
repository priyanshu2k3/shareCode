import { getData } from "@/app/utils/getData";
import { NextRequest, NextResponse } from "next/server";
const shortid = require('shortid');
const crypto = require('crypto');


export async function GET(request:NextRequest) {

  const id =await request.url.split('/').pop()
  if (!id){return NextResponse.json({"rdResponse":""});}

  const rdResponse=getData(id)
  console.log(rdResponse,"req.header" )
  return NextResponse.json({rdResponse});

}
  
  