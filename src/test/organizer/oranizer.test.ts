// jest.mock('uuid', ()=>({
//     v4: ()=> 'test-uuid'
// }));


// import express, {Express} from 'express';
// import request from "supertest";
// import {v4 as uuidv4} from "uuid";
// import organizerRouter from "../../app/api/v1/organizer/route";
// import prisma from "../../app/prisma";

// jest.mock('../../app/prisma', ()=>({
//     __esModule: true,
//     default : {
//         organizer: {
//             create : jest.fn()
//         }
//     }
// }));

// describe("Organizer Controller", ()=>{
//     let app : Express;

//     beforeAll(()=>{
//         app = express();
//         app.use(express.json());

//         app.use('/organizer', organizerRouter);
//     });

//     afterEach(()=>{
//         jest.clearAllMocks();
//     });

//     describe('POST /organizer - Create Organizer', ()=>{
//         it('should create a new organizer', async()=>{
//             const organizerId = uuidv4();

//             const mockOrganizer = {
//                 id: organizerId,
//                 name: "Group Pure Event Organizer"
//             };

//             (prisma.organizer.create as jest.Mock).mockResolvedValue(mockOrganizer);

//             const response = await request(app)
//                 .post('/organizer')
//                 .send({
//                     name: 'Group Pure Event Organizer'
//                 })
//         })
//     })
// })