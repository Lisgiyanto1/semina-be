import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

import logger from './app/logger';
import testMongoConnection from './app/testconnection';

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./app/swagger";


import mainRouter from "./routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SWAGGER-SETUP
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use(mainRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome in semina server : )");
});

async function main() {
    logger.info("Starting Server ....");

    const isConneted = await testMongoConnection();

    if (!isConneted) {
        logger.error("Tidak dapat terhubung ke MongoDB ...");
        process.exit(1);
    }

    logger.info("[OK] Server Ready !!!!")

    app.listen(PORT, () => {
        logger.info(`Server Running at http://localhost:${PORT}`);
    });
}

main();

