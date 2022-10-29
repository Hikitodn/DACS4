import redisClient from "../config/redis";

const saveCall = (key: any, value: any) => {
  redisClient.set(key, JSON.stringify(value));
};

const getCall = (key: any) => {
  redisClient.get(key);
};

export { saveCall, getCall };
