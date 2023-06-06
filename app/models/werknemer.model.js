// const docentModel = require("./docent.model");

module.exports = (sequelize, Sequelize) => {
    const Werknemer = sequelize.define("werknemer", {
      naam: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefoon: {
        type: Sequelize.STRING
      },
      specialisatie: {
        type: Sequelize.STRING
      },
    });
    
    Werknemer.associate = (models) => {
      Werknemer.belongsTo(models.Bedrijf, {
        foreignKey: {
          name: 'bedrijfId',
          as: "bedrijf"
        }
      });
      Werknemer.hasMany(models.Aanbod, {
        foreignKey: 'werknemerId',
        as: 'aanbods',
      });
      Werknemer.hasMany(models.Vraag, {
        foreignKey: 'werknemerId',
        as: 'vragen',
      });
    };

    return Werknemer;
  };