import winston, { format, transports } from "winston";


/* 
    *Logger ini untuk membuat format logging custom : )
*/

const logger = winston.createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} => [${level}] : ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
    ]
})


export default logger;