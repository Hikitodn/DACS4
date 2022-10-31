import redisClient from "../config/redis";

const saveCall = (key: any, value: any) => {
  return new Promise((resolve, reject) => {
    redisClient.SET(
      key,
      JSON.stringify(value),
      "EX",
      86400,
      (err: Error, res: unknown) => {
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
    redisClient.GET(key, (err: any, res: string) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};

export { saveCall, getCall };
