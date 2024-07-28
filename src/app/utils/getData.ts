import { createClient } from "redis"

export const getData=async(key:string)=>{
    const redisURL=process.env.redisURL
    
    console.log(redisURL)

    const client = createClient ({url : redisURL});

client.on("error", (err)=>{console.log(err);throw err; });

await client.connect()

// const rdResponse=await client.get(key);
 const rdResponse=""
console.log(rdResponse)
return( rdResponse)
}