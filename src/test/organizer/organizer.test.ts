jest.mock('uuid', () => ({
    v4: () => 'test-uuid'
}));


import express, { Express } from 'express';
import request from "supertest";
import { v4 as uuidv4 } from "uuid";
import organizerRouter from "../../app/api/v1/organizer/route";
import prisma from "../../app/prisma";

jest.mock('../../app/prisma', () => ({
    __esModule: true,
    default: {
        organizer: {
            create: jest.fn(),
            findUniqueOrThrow: jest.fn()
        }
    }
}));

describe("Organizer Controller", () => {
    let app: Express;

    beforeAll(() => {
        app = express();
        app.use(express.json());

        app.use('/organizer', organizerRouter);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /organizer - Create Organizer', () => {
        it('should create a new organizer', async () => {
            const organizerId = uuidv4();

            const mockOrganizer = {
                id: organizerId,
                name: "Group Pure Event Organizer"
            };

            (prisma.organizer.create as jest.Mock).mockResolvedValue(mockOrganizer);

            const response = await request(app)
                .post('/organizer')
                .send({
                    name: 'Group Pure Event Organizer'
                });
            expect(response.status).toBe(201);
            expect(response.body.status).toBe(true);
            expect(response.body.data.id).toBe(organizerId);
            expect(response.body.message).toContain('SUCCESS')
        });
    });

    describe('GET /organize/:id - GET organizer by id', () => {
        it("should be find organizer by id has successfully", async () => {
            const organizerId = uuidv4();
            const mockOrganizer = {
                id: organizerId,
                name: "Group Pure Event Organizer"
            };
            jest.spyOn(prisma.organizer, 'findUniqueOrThrow').mockResolvedValue(mockOrganizer);

            const response = await request(app)
                .get('/organizer/:id')
                .send({
                    id: organizerId
                });

            expect(response.status).toBe(200);
            expect(response.body.status).toBe(true);
            expect(response.body.data.id).toBe(organizerId);
            expect(response.body.message).toContain("SUCCESS")
        });

        it("should be 404 not found organizer", async () => {
            jest.spyOn(prisma.organizer, 'findUniqueOrThrow').mockRejectedValue(new Error("Record not Found"));
            const response = await request(app)
                .get('/organizer/:id')
                .send({
                    id: 'invalid_id'
                });
            expect(response.status).toBe(404);
            expect(response.body.status).toBe(false);
            expect(response.body.id).toBe(undefined);
            expect(response.body.message).toContain("FAILED");
        });
    })


})