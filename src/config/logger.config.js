const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];

// The below transport configuration enables logging on the console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.timestamp({
        format: "YYYY-MM-DD hh:mm:ss A",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// The below transport configuration enables logging in mongodb database
allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

// The below transport configuration enables logging in file
allowedTransports.push(
  new winston.transports.File({ filename: "error.log", level: "error" })
);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss A" }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: allowedTransports,
});

module.exports = logger;
