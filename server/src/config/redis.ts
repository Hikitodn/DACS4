import * as redis from "redis";

const client = redis.createClient({});

client.on("error", (error) => {
  console.log(error);
});

export { client };
