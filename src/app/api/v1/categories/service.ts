import prisma from "../../../prisma";
import CategoryValidation from "./catgories.validation";
import { CategoriesCreateRequest, CategoriesType, CategoriesUpdateRequest } from "./model";

class CategoriesService {
    static async createCategory(data: Readonly<CategoriesCreateRequest>): Promise<CategoriesType> {
        CategoryValidation.CREATE.parse(data);

        const category = await prisma.category.create({
            data: {
                name: data.name,
                organizerId: data.organizerId
            },
            include: {
                organizer: true
            }
        });
        return category;
    }

    static async getById(id: Readonly<string>): Promise<CategoriesType> {
        CategoryValidation.GETBYID.parse({ id });
        const category = await prisma.category.findUniqueOrThrow({
            where: {
                id
            },
            include: {
                organizer: true
            }
        });
        return category;
    }

    static async updateCategory(params: string, data: Readonly<CategoriesUpdateRequest>,): Promise<CategoriesType> {
        CategoryValidation.UPDATE.parse({ params, ...data });
        const category = await prisma.category.update({
            where: {
                id: params
            },
            data: data,
            include: {
                organizer: true
            }
        });

        return category;
    }

    static async deleteCategory(params: string): Promise<Partial<CategoriesType>> {
        CategoryValidation.DELETE.parse({ params });
        const category = await prisma.category.delete({
            where: {
                id: params
            }, include: {
                organizer: false
            }
        });
        return category;
    }
}

export default CategoriesService;