import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Semina API",
            version: "1.0.0",
            description: "API Documentation for Semina Server",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Development Server",
            },
        ],
    },

    apis: [
        "./src/app/api/v1/**/*.ts",
    ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
