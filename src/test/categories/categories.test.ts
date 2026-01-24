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
});


