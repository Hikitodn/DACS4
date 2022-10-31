const Redis = require("redis");

const client = Redis.createClient();

client.on("error", (err: any) => console.log(err));

export default client;
