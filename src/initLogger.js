import winston from "winston";
import config from "./config";

// we just dump all logs to stdout. Docker should handle logs management

export default function initLogger() {
  winston.info(`Loging ${config.logLevel} level`);
  winston.configure({
    level: config.logLevel,
    transports: [
      new winston.transports.Console({
        colorize: true
      })
    ],
    exitOnError: false
  });
}
