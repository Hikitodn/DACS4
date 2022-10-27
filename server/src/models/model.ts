import { Response } from "express";
import { client as redisClient } from "../config/redis";

const saveCall = (key: string, value: string) => {
  return new Promise((resolve, reject) => {
    redisClient.v4.set(
      key,
      JSON.stringify(value),
      "EX",
      86400,
      (err: Error, res: Response) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
};

const getCall = (key: string) => {
  return new Promise((resolve, reject) => {
    redisClient.v4.get(key, (err: Error, res: string) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};

export { saveCall, getCall };
