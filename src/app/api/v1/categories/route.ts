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
 *             properties:
 *               name:
 *                 type: string
 *                 example: Technology
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



/**
 * @swagger
 * /categories/:id:
 *   get:
 *     summary: Get Category
 *     description: Get category by Id
 *     tags: [Categories]
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
 *         description: Category has been find successfully
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
 *                   example: "[SUCCESS] Category has been find"
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
 *         description: Failed to find id category
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
 *                   example: "[FAILED] Failed to find id category"
 *                 errors:
 *                   type: string
 *                   example: "Not Found"
 */
router.get("/:id", CategoriesController.findByID);


/**
 * @swagger
 * /categories/:id:
 *   patch:
 *     summary: Update exist category
 *     description: Update category and link it to an organizer
 *     tags: [Categories]
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
 *                 example: Technology
 *     responses:
 *       201:
 *         description: Category update successfully
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
 *                   example: "[SUCCESS] Category has been updated"
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
 *         description: Failed to update category
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
 *                   example: "[FAILED] Failed to update category"
 *                 errors:
 *                   type: string
 *                   example: Category not found"
 */
router.patch("/:id", CategoriesController.updateCategory);

export default router;
