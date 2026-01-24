import { Router } from "express";
import CategoriesController from "./controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Categories management
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create new category
 *     description: Create category and link it to an organizer
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - organizerId
 *             properties:
 *               name:
 *                 type: string
 *                 example: Technology
 *               organizerId:
 *                 type: string
 *                 description: Organizer ObjectId
 *                 example: "66c9e1f3b3a1c8f6c4d1a912"
 *     responses:
 *       201:
 *         description: Category created successfully
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
 *                   example: "[SUCCESS] Category has been created"
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
 *         description: Failed to create category
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
 *                   example: "[FAILED] Failed to create category"
 *                 errors:
 *                   type: string
 *                   example: "Organizer not found"
 */
router.post("/", CategoriesController.createCategory);

export default router;
