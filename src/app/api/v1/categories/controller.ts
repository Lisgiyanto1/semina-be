import { Request, Response } from "express";
import prisma from "../../../prisma";
import { CategoriesCreateRequest, CategoriesResponse } from "./model";

class CategoriesController {
    createCategory = async (req: Request<{}, {}, CategoriesCreateRequest>, res: Response) => {
        try {
            const category = await prisma.category.create({
                data: {
                    name: req.body.name,
                    organizerId: req.body.organizerId
                },
                include: {
                    organizer: true
                }
            });
            res.status(201).json(CategoriesResponse.success('[SUCCESS] Category has been created', category));

        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : "[?] Unknown Error";
            res.status(400).json(CategoriesResponse.error("[FAILED] Failed to create category", errorMessage));
        }
    }
}

export default new CategoriesController();