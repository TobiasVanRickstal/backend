const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.docents = require("./docent.model.js")(sequelize, Sequelize);
db.vragen = require("./vraag.model.js")(sequelize, Sequelize);
db.bedrijven = require("./bedrijf.model.js")(sequelize, Sequelize);
db.werknemers = require("./werknemer.model.js")(sequelize, Sequelize);

const Vraag = require("./vraag.model");
const Docent = require("./docent.model");
// Define associations between models
db.docents.hasMany(db.vragen, { foreignKey: "docentId", as: "vragen" });
db.vragen.belongsTo(db.docents, { foreignKey: "docentId", as: "docent" });

module.exports = db;