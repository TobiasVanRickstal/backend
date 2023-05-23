module.exports = (sequelize, Sequelize) => {
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
      as: "typeData"
    });
    Vraag.belongsTo(models.Topic, {
      foreignKey: "topicId",
      as: "topicData"
    });
    Vraag.belongsTo(models.Vak, {
      foreignKey: "vakId",
      as: "vakData"
    });
  };

  return Vraag;
};
