import { createClient } from "redis"
import { nanoid } from "nanoid";
import { getData } from "./getData";
const crypto = require('crypto');

export const setId=async(key:any,data:any)=>{
const redisURL=process.env.redisURL

console.log(redisURL)

const client = createClient ({url : redisURL});

client.on("error", (err)=>{console.log(err);throw err; });

await client.connect()

  const hash = crypto.createHash('sha256').update(key).digest('hex');
  
  // Take the first 8 characters of the hash as the short ID
  const shortId = hash.substring(0, 8);
  const dbData=await getData(shortId)
  console.log(dbData,"in the setID")
  if(!dbData){
    const rdResponse=await client.set(shortId,data);
    console.log(rdResponse)
  }
 
console.log(`Short ID for IP ${key}: ${shortId}`);

// return rdResponse
return({shortId,dbData})
}