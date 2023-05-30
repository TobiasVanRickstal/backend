// const docentModel = require("./docent.model");

module.exports = (sequelize, Sequelize) => {
    const Bedrijf = sequelize.define("bedrijf", {
      naam: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      BTW: {
        type: Sequelize.STRING
      },
      beschrijving: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
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
