jest.mock('uuid', () => ({
    v4: () => 'test-uuid',
}));

import express, { Express } from 'express';
import request from "supertest";
import { v4 as uuidv4 } from 'uuid';
import categoriesRouter from "../../app/api/v1/categories/route";
import prisma from '../../app/prisma';
/* 
    *Format Test: 
    *1. Mock
    *2. Skema Unit Test (describe) 
*/


jest.mock('../../app/prisma', () => ({
    __esModule: true,
    default: {
        category: {
            create: jest.fn(),
            findUniqueOrThrow: jest.fn(),
            update: jest.fn

        },
    },
}));


describe('Categories Controller', () => {
    let app: Express;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use('/categories', categoriesRouter);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('POST /categories - Create Category', () => {
        it('should create a new category successfully', async () => {
            const categoryId = uuidv4();
            const organizerId = uuidv4();
            const mockCategory = {
                id: categoryId,
                name: "Horor",
                organizerId: organizerId,
                organizer: {
                    id: organizerId,
                    name: 'PT Valcon Creative'
                }
            };

            (prisma.category.create as jest.Mock).mockResolvedValue(mockCategory);

            const response = await request(app)
                .post('/categories')
                .send({
                    name: 'Horor',
                    organizerId: organizerId,
                });
            expect(response.status).toBe(201);
            expect(response.body.status).toBe(true);
            expect(response.body.data.id).toBe(categoryId);
            expect(response.body.data.organizerId).toBe(organizerId);
            expect(response.body.message).toContain('SUCCESS')
        });

        it('should return error when organizerId is invalid', async () => {
            const errorMessage = 'Organization not found';

            (prisma.category.create as jest.Mock).mockRejectedValue(
                new Error(errorMessage)
            );

            const response = await request(app)
                .post('/categories')
                .send({
                    name: 'Horor',
                    organizerId: uuidv4(),
                });
            expect(response.status).toBe(400);
            expect(response.body.status).toBe(false);
        });
    });

    describe("GET /categories/:id - Get Category by ID", () => {
        it("should find category successfully", async () => {
            const categoryId = uuidv4();
            const organizerId = uuidv4();

            const mockCategory = {
                id: categoryId,
                name: "Artificial Intelligence",
                organizerId: organizerId,
                organizer: {
                    id: organizerId,
                    name: "Google Developer Group",
                },
            };

            (prisma.category.findUniqueOrThrow as jest.Mock)
                .mockResolvedValue(mockCategory);

            const response = await request(app)
                .get(`/categories/${categoryId}`)
                .send();

            expect(response.status).toBe(200);
            expect(response.body.status).toBe(true);
            expect(response.body.data.id).toBe(categoryId);
            expect(response.body.data.organizerId).toBe(organizerId);
            expect(response.body.message).toContain("SUCCESS");
        });

        it("should return 404 when category not found", async () => {
            (prisma.category.findUniqueOrThrow as jest.Mock)
                .mockRejectedValue(new Error("Record not found"));

            const response = await request(app)
                .get(`/categories/invalid-id`)
                .send();

            expect(response.status).toBe(404);
            expect(response.body.status).toBe(false);
            expect(response.body.message).toContain("FAILED");
        });
    });

    describe("PATCH /categories/:id - PATCH Category by ID", () => {
        it('should be updated category successfully', async () => {
            const categoryId = uuidv4();
            const organizerId = uuidv4();
            const mockCategory = {
                id: categoryId,
                name: "Artificial Intelligence",
                organizerId: organizerId,
                organizer: {
                    id: organizerId,
                    name: "Google Developer Group",
                },
            };
            jest.spyOn(prisma.category, 'update').mockResolvedValue(mockCategory);
            const response = await request(app)
                .patch('/categories/:id')
                .send({
                    id: categoryId,
                    name: "Art Coffee Contest",
                    organizerId: organizerId
                });

            expect(response.status).toBe(201)
            expect(response.body.status).toBe(true)
            expect(response.body.data.id).toBe(categoryId)
            expect(response.body.message).toContain("SUCCESS")
        })
    })
});


