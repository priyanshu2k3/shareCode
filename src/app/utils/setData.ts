import { createClient } from "redis"
import { nanoid } from "nanoid";
const crypto = require('crypto');

export const setData=async(ip:any,data:any)=>{
const redisURL=process.env.redisURL

console.log(redisURL)

const client = createClient ({url : redisURL});

client.on("error", (err)=>{console.log(err);throw err; });

await client.connect()

  const hash = crypto.createHash('sha256').update(ip).digest('hex');
  
  // Take the first 8 characters of the hash as the short ID
  const shortId = hash.substring(0, 8);
 
console.log(`Short ID for IP ${ip}: ${shortId}`);
// const rdResponse=await client.set(shortId,data);
// return rdResponse
return("string")
}