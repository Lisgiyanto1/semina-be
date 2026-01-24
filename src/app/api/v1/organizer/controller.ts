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
}
export default new OrganizerController();