import { Request, Response } from "express";
import { CategoriesCreateRequest, CategoriesResponse } from "./model";
import CategoriesService from "./service";

class CategoriesController {
    createCategory = async (req: Request<{}, {}, CategoriesCreateRequest>, res: Response) => {
        try {
            const data = {
                name: req.body.name,
                organizerId: req.body.organizerId
            }

            const create = await CategoriesService.createCategory(data);
            res.status(201).json(CategoriesResponse.success('[SUCCESS] Category has been created', create));

        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : "[?] Unknown Error";
            res.status(400).json(CategoriesResponse.error("[FAILED] Failed to create category", errorMessage));
        }
    }

    findByID = async (req: Request, res: Response) => {
        try {
            const categoryId = String(req.params.id);

            const category = await CategoriesService.getById(categoryId);

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
            const data = req.body;
            const update = await CategoriesService.updateCategory(String(categoryId), data)
            return res.status(201).json(CategoriesResponse.success("[SUCCESS] Update Successfully", update));
        } catch (error) {
            const errMessage = error instanceof Error ? error.message : 'Unknown';
            res.status(404).json(CategoriesResponse.error("[FAILED] : Failed Update Data Category Id Not Found", errMessage));
        }
    };

    deleteCategory = async (req: Request, res: Response) => {
        try {
            const categoryId = String(req.params.id)
            const deleteCategory = await CategoriesService.deleteCategory(categoryId)

            return res.status(200).json(CategoriesResponse.success("[SUCCESS] Delete Category Successful", deleteCategory))
        } catch (error) {
            const errMessage = error instanceof Error ? error.message : 'Unknown Error';
            return res.status(404).json(CategoriesResponse.error("[FAILED] Failed Delete Category", errMessage));
        }
    }
}

export default new CategoriesController();