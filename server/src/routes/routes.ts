import { Router } from "express";
import * as controller from "../controllers/controller";

const router = Router();

router.post("/api/save-call-id", controller.saveCallId);
router.get("/api/get-call-id/:id", controller.getCallId);

export = router;
