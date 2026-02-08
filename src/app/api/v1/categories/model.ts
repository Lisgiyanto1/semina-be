import { OrganizerType } from "../organizer/model";

export interface CategoriesType {
    id: string;
    name: string;
    organizerId: string;
    organizer: OrganizerType;
}

export type CategoriesCreateRequest = Omit<CategoriesType, "id" | "organizer">;
export type CategoriesUpdateRequest = Omit<CategoriesType, "id" | "organizer">;

// export type GetCategoryRequest = {
//     id: string;
// }

// export type CategoriesCreateRequest = {
//     name: string;
//     organizerId: string;
// }

// export type CategoriesUpdateRequest = {
//     name?: string;
//     organizerId?: string;
// }

export type CategoriesResponseType = {
    status: boolean;
    message: string;
    data: CategoriesType;
}

export type CategoriesErrorResponse = {
    status: boolean;
    message: string;
    errors: string;
}


export class CategoriesResponse {
    static success(message: string, data: CategoriesType): CategoriesResponseType {
        return {
            status: true,
            message,
            data
        };
    }

    static error(message: string, errors: string): CategoriesErrorResponse {
        return {
            status: false,
            message,
            errors
        }
    }
}

