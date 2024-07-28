import { getData } from "@/app/utils/getData";
import { NextRequest, NextResponse } from "next/server";
const shortid = require('shortid');
const crypto = require('crypto');


export async function POST(request:NextRequest) {

  const body = await request.json();
  const key=body.key

  console.log(key,"id pullData" )
   if (!key){return NextResponse.json({"rdResponse":""});}

  const rdResponse=await getData(key)
// const rdResponse=""
  console.log(rdResponse,"pullData" )
  return NextResponse.json({rdResponse,key});

}
  
  