import { RedisCommandArgument } from "@redis/client/dist/lib/commands";
import redisClient from "../config/redis";

const saveCall = (key: RedisCommandArgument, value: any) => {
  redisClient.set(key, JSON.stringify(value), { EX: 86400 });
};

const getCall = (key: RedisCommandArgument) => {
  redisClient.get(key);
};

export { saveCall, getCall };
