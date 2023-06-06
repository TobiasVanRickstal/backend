module.exports = (sequelize, Sequelize) => {
    // const Werknemer = require("./werknemer.model");
    // const Bedrijf = require("./bedrijf.model");
    // const Docent = require("./docent.model");
    const Aanbod = sequelize.define("aanbod", {
      naam: {
        type: Sequelize.STRING
      },
      informatie: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      views: {
        type: Sequelize.INTEGER
      },
      prijs: {
        type: Sequelize.INTEGER
      },
      datum: {
        type: Sequelize.STRING
      }
    });
  
    Aanbod.associate = (models) => {
      Aanbod.belongsTo(models.Werknemer, {
        foreignKey: "werknemerId",
        as: "werknemer"
      });
      Aanbod.belongsTo(models.Bedrijf, {
        foreignKey: "bedrijfId",
        as: "bedrijf"
      });
      Aanbod.belongsTo(models.Docent, {
        foreignKey: "docentId",
        as: "docent"
      });
    };
  
    return Aanbod;
  };
  