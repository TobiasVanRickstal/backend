// const docentModel = require("./docent.model");

module.exports = (sequelize, Sequelize) => {
    const Bedrijf = sequelize.define("bedrijf", {
      naam: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      BTW: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.INTEGER
      },
      abbonement: {
        type: Sequelize.INTEGER
      },
    });
    
    Bedrijf.associate = (models) => {
      Bedrijf.hasMany(models.Werknemer, {
        foreignKey: {
          name: 'bedrijfId',
          as: "werknemers"
        }
      });
    };

    return Bedrijf;
  };
