import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis"
import { nanoid } from "nanoid";
import { setData } from "@/app/utils/setData";


export async function GET(request:NextRequest) {

    const ip=request.headers?.get("x-forwarded-for")|| "";
    const link =await setData(ip,"")
    // const link ="apple"
    const host = request.headers.get('host') ||"";
    console.log("http://"+host+"/"+link)
    return NextResponse.json({"link":"http://"+host+"/"+link})
}
