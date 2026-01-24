import { PrismaClient } from '@prisma/client';
import logger from './logger';

const prisma = new PrismaClient();

export default async function testMongoConnection(): Promise<boolean> {
    try {
        logger.info("TESTING MONGO DB CONNECTION ....");

        await prisma.$runCommandRaw({ ping: 1 });

        logger.info("[OK] MongoDB Connected");
        return true;
    } catch (error) {
        logger.error("MongoDB Connection Error:", error);
        return false;
    }
}
