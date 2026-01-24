import { Router } from "express";
import OrganizerController from "./controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Organizer
 *   description: Organizer management
 */

/**
 * @swagger
 * /organizer:
 *   post:
 *     summary: Create new organizer
 *     description: Create organizer using name only
 *     tags: [Organizer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Google Developer Group
 *     responses:
 *       201:
 *         description: Organizer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "[SUCCESS] Organizer has been created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "clx123abc"
 *                     name:
 *                       type: string
 *                       example: Google Developer Group
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Failed to create organizer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "[FAILED] Failed to create organizer"
 *                 error:
 *                   type: string
 *                   example: "Unique constraint failed"
 */
router.post("/", OrganizerController.createOrganizer);

export default router;
