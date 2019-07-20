const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../config");

if (process.env.NODE_ENV === "test") {
  databaseName = config.db.testDatabaseName;
}

const sequelize = new Sequelize(
  config.db.databaseName,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: "postgres",
      protocol:'postgres',
    logging: false,
    dialectOptions: { ssl: true },

  }
);
const db = {};
fs.readdirSync(__dirname)
  .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  db[modelName].sync({ alter: true });
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
