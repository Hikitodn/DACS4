import { Request, Response } from "express";
import { saveCall, getCall } from "../models/model";

export const saveCallId = async (req: Request, res: Response) => {
  try {
    const { id, signalData } = req.body;
    saveCall(id, signalData);
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
    const code = getCall(id);
    res.status(200).send({ code });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(400).send(e.message);
    }
  }
};
