import { Router } from "express";
import v1Route from "../app/api/v1/route";

const router = Router();

router.use("/api/v1", v1Route)

export default router;