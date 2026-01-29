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


/**
 * @swagger
 * /categories/:id:
 *   get:
 *     summary: Get Organizer
 *     description: Get organizer by Id
 *     tags: [Organizer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *                  id:
 *                    type: string
 *                    example: "66c9e1f3b3a1c8f6c4d1a999"
 *     responses:
 *       201:
 *         description: Organizer has been find successfully
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
 *                   example: "[SUCCESS] Organizer has been find"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "66c9e1f3b3a1c8f6c4d1a999"
 *                     name:
 *                       type: string
 *                       example: Technology
 *                     organizerId:
 *                       type: string
 *                       example: "66c9e1f3b3a1c8f6c4d1a912"
 *                     organizer:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "66c9e1f3b3a1c8f6c4d1a912"
 *                         name:
 *                           type: string
 *                           example: Google Developer Group
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                         updatedAt:
 *                           type: string
 *                           format: date-time
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Failed to find id organizer
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
 *                   example: "[FAILED] Failed to find id organizer"
 *                 errors:
 *                   type: string
 *                   example: "Not Found"
 */
router.get("/:id", OrganizerController.getOrganizerByid);

export default router;
