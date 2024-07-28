import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis"
import { nanoid } from "nanoid";
import { setId} from "@/app/utils/setId";



export async function POST(request:NextRequest) {

    const redisURL=process.env.redisURL
const client = createClient ({url : redisURL});
client.on("error", (err)=>{console.log(err);throw err; });
await client.connect()

    const {key,data}=await request.json()
    const rdResponse=await client.set(key,data);
   console.log("in the pushData",key,data,rdResponse)
    return NextResponse.json({"msg":"saved"})
}
