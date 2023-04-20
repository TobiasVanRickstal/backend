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
    
    // Docent.hasMany(Aanbod);

    return Bedrijf;
  };
