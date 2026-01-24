import { Router } from "express";
import categoriesRoute from "./categories/route";
import organizerRoute from "./organizer/route";
const router = Router();

router.use("/categories", categoriesRoute);
router.use("/organizer", organizerRoute);

export default router;