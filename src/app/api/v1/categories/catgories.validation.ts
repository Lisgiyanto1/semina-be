import { z } from "zod";


class CategoryValidation {
    static readonly CREATE = z.object({
        name: z
            .string({
                error: "Category name is required",
            })
            .min(1, "Category name must be at least 3 characters"),
    });

    static readonly GETBYID = z.object({
        id: z.string().min(1, "Category ID is required")
    });

    static readonly DELETE = z.object({
        id: z.string().min(1, "Category ID is required")
    })

    static readonly UPDATE = z.object({
        id: z.string().min(1, "Category ID is required"),
        name: z.string().min(3, "Category name must be at least 3 characters"),
    });
}


export default CategoryValidation;
