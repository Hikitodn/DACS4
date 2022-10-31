import { Request, Response } from "express";
import { saveCall, getCall } from "../models/model";

export const saveCallId = async (req: Request, res: Response) => {
  try {
    const { id, signalData } = req.body;
    await saveCall(id, signalData);
    res.status(200).send(true);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
};

export const getCallId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const code = await getCall(id);
    res.status(200).send({ code });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
};
