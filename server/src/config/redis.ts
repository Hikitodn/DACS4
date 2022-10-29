import { createClient } from "redis";

const client = createClient();

client.connect();
client.on("error", (err) => console.log(err));

export default client;
