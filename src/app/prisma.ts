

import { PrismaClient } from "@prisma/client";
import logger from "./logger";

/* 
    *Instantiate Prisma x Winston
    *Trigger logging database debugging
*/

const prisma = new PrismaClient({
    log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' }
    ],
});

prisma.$on('query', (e) => {
    logger.info(`Query: ${e.query}, Params: ${e.params}, Duration: ${e.duration}`);
});

prisma.$on('info', (e) => {
    logger.info(`Info: ${e.message}`);
});

prisma.$on('warn', (e) => {
    logger.warn(`Warning: ${e.message}`);
});

prisma.$on('error', (e) => {
    logger.error(`Error: ${e.message}`);
})



export default prisma;