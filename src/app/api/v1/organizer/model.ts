export interface OrganizerType  {
    id: string;
    name: string;
}
export type OrganizerCreate = Omit<OrganizerType, "id">;

export type OrganizerResponseType = {
    status: boolean,
    message: string,
    data: OrganizerType;
}

export type OrganizerErrorResponseType = {
    status: boolean,
    message: string,
    errors: string
}

export class OrganizerResponses {
    static success(message: string, data: OrganizerType): OrganizerResponseType {
        return {
            status: true,
            message,
            data
        }
    }

    static error(message: string, errors: string): OrganizerErrorResponseType {
        return {
            status: false,
            message,
            errors
        }
    }
}

