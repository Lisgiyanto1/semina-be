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

    findByID = async (req: Request, res: Response) => {
        try {
            const categoryId = req.params.id;

            const category = await prisma.category.findUniqueOrThrow({
                where: {
                    id: String(categoryId),
                },
                include: {
                    organizer: true,
                },
            });

            return res.status(200).json(
                CategoriesResponse.success(
                    "[SUCCESS] Find the category data.",
                    category
                )
            );
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Unknown error";

            return res.status(404).json(
                CategoriesResponse.error(
                    "[FAILED] Categories Not Found",
                    message
                )
            );
        }
    };

    updateCategory = async (req: Request, res: Response) => {
        try {
            const categoryId = req.params.id;
            const update = await prisma.category.update({
                where: {
                    id: String(categoryId)
                },
                data: req.body
            });
            return res.status(201).json(CategoriesResponse.success("[SUCCESS] Update Successfully", update));
        } catch (error) {
            const errMessage = error instanceof Error? error.message : 'Unknown';
            res.status(404).json(CategoriesResponse.error("[FAILED] : Failed Update Data Category Id Not Found", errMessage));
        }
    }
}

export default new CategoriesController();