import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis"
import { nanoid } from "nanoid";
import { setId} from "@/app/utils/setId";


export async function GET(request:NextRequest) {

    const ip=request.headers?.get("x-forwarded-for")|| "";
    const dbres =await setId(ip,"")
    const host = request.headers.get('host') ||"";
    return NextResponse.json({"link":"http://"+host+"/"+dbres.shortId,"data":dbres.dbData})
}
