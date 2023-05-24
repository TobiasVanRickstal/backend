module.exports = (sequelize, Sequelize) => {
  const Docent = require("./docent.model");
  const Type = require("./type.model");
  const Topic = require("./topic.model");
  const Vak = require("./vak.model");
  const Vraag = sequelize.define("vraag", {
    naam: {
      type: Sequelize.STRING
    },
    informatie: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    fase: {
      type: Sequelize.INTEGER
    },
    views: {
      type: Sequelize.INTEGER
    },
    solicitanten: {
      type: Sequelize.INTEGER
    },
    periodes: {
      type: Sequelize.STRING
    },
    prijs: {
      type: Sequelize.INTEGER
    },
    serie: {
      type: Sequelize.BOOLEAN
    },
    difficulty: {
      type: Sequelize.INTEGER
    }
  });

  Vraag.associate = (models) => {
    Vraag.belongsTo(models.Type, {
      foreignKey: "typeId",
      as: "type"
    });
    Vraag.belongsTo(models.Topic, {
      foreignKey: "topicId",
      as: "topic"
    });
    Vraag.belongsTo(models.Vak, {
      foreignKey: "vakId",
      as: "vak"
    });
    Vraag.belongsTo(models.Docent, {
      foreignKey: "docentId",
      as: "docent"
    });
  };

  return Vraag;
};
