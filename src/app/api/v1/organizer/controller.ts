import { Request, Response } from "express";
import prisma from "../../../prisma";
import { OrganizerCreateRequest, OrganizerResponses } from "./model";

class OrganizerController {
    createOrganizer = async (req: Request<{}, {}, OrganizerCreateRequest>, res: Response) => {
        try {
            const organizer = await prisma.organizer.create({
                data: {
                    name: req.body.name
                }
            });
            res.status(201).json(OrganizerResponses.success("[SUCCESS] Organizer has been created", organizer));
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : "[?] Unknown Error";
            res.status(400).json(OrganizerResponses.error("[FAILED] Failed to create organizer", errorMessage));
        }
    }

    getOrganizerByid = async (req: Request, res: Response) => {
        try {
            const find = await prisma.organizer.findUniqueOrThrow({
                where: {
                    id: String(req.params.id)
                }
            });
            res.status(200).json(OrganizerResponses.success('Organizer Has Been Find Successfully', find));
        } catch (error) {
            const errMessage = error instanceof Error ? error.message : 'Unknown Error';
            res.status(404).json(OrganizerResponses.error('Organizer Not Found', errMessage));
        }
    }
}
export default new OrganizerController();