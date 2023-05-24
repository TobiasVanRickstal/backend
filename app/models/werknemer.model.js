// const docentModel = require("./docent.model");

module.exports = (sequelize, Sequelize) => {
    const Werknemer = sequelize.define("werknemer", {
      naam: {
        type: Sequelize.STRING
      },
      docent: {
        type: Sequelize.INTEGER,
        // references: {
        //     model: 'docents', // 'fathers' refers to table name
        //     key: 'id', // 'id' refers to column name in fathers table
        // }
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
    };

    return Werknemer;
  };