const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Semina API",
            version: "1.0.0",
            description: "API documentation (local development)",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Local API",
            },
        ],
    },
    apis: ["./src/app/api/v1/**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

fs.mkdirSync("docs", { recursive: true });
fs.writeFileSync("docs/swagger.json", JSON.stringify(swaggerSpec, null, 2));

console.log("✅ Swagger JSON generated");
