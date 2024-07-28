import { createClient } from "redis"

export const getData=async(key:string)=>{
    const redisURL=process.env.redisURL
    
    console.log(key,"in the getData value of key")

    const client = createClient ({url : redisURL});

client.on("error", (err)=>{console.log(err);throw err; });

await client.connect()

const rdResponse=await client.get(key);
console.log(rdResponse,"in the getter function")
return({rdResponse})
}