import { Sequelize } from "sequelize";
import winston from "winston";
import "dotenv/config";
const database = process.env.DATABASE_URL;
console.log(database);
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const sequelize = new Sequelize(database, {
  logging: (msg) => logger.info(msg),
});

export { sequelize, logger };
