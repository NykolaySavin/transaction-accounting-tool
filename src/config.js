import dotenv from "dotenv";
dotenv.config();
const env = process.env;
module.exports = {
  mode: env.NODE_ENV,
  api: {
    port: env.API_PORT
  },
  logLevel: env.LOG_LEVEL,
  db: {
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    databaseName: env.POSTGRES_DB,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD
  }
};
