import { Router } from "express";
import { saveCallId, getCallId } from "../controllers/controller";

const router = Router();

router.post("/api/save-call-id", saveCallId);
router.get("/api/get-call-id/:id", getCallId);

export = router;
