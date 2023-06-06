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
db.types = require("./type.model.js")(sequelize, Sequelize);
db.topics = require("./topic.model.js")(sequelize, Sequelize);
db.vaks = require("./vak.model.js")(sequelize, Sequelize);
db.aanbods = require("./aanbod.model.js")(sequelize, Sequelize);

// Define associations between models
db.docents.hasMany(db.vragen, { foreignKey: "docentId", as: "vragen" });
db.vragen.belongsTo(db.docents, { foreignKey: "docentId", as: "docent" });

db.docents.hasMany(db.aanbods, { foreignKey: "docentId", as: "aanbods" });
db.aanbods.belongsTo(db.docents, { foreignKey: "docentId", as: "docent" });

db.werknemers.hasMany(db.aanbods, { foreignKey: "werknemerId", as: "aanbods" });
db.aanbods.belongsTo(db.werknemers, { foreignKey: "werknemerId", as: "werknemer" });

db.bedrijven.hasMany(db.aanbods, { foreignKey: "bedrijfId", as: "aanbods" });
db.aanbods.belongsTo(db.bedrijven, { foreignKey: "bedrijfId", as: "bedrijf" });

db.werknemers.hasMany(db.vragen, { foreignKey: "werknemerId", as: "vragen" });
db.vragen.belongsTo(db.werknemers, { foreignKey: "werknemerId", as: "werknemer" });

db.bedrijven.hasMany(db.vragen, { foreignKey: "bedrijfId", as: "vragen" });
db.vragen.belongsTo(db.bedrijven, { foreignKey: "bedrijfId", as: "bedrijf" });

db.bedrijven.hasMany(db.werknemers, { foreignKey: "bedrijfId", as: "werknemers" });
db.werknemers.belongsTo(db.bedrijven, { foreignKey: "bedrijfId", as: "bedrijf" });

db.vragen.belongsTo(db.types, { foreignKey: "typeId", as: "type" });
db.types.hasMany(db.vragen, { foreignKey: "typeId", as: "vragen" });

db.vragen.belongsTo(db.topics, { foreignKey: "topicId", as: "topic" });
db.topics.hasMany(db.vragen, { foreignKey: "topicId", as: "vragen" });

db.vragen.belongsTo(db.vaks, { foreignKey: "vakId", as: "vak" });
db.vaks.hasMany(db.vragen, { foreignKey: "vakId", as: "vragen" });


module.exports = db;