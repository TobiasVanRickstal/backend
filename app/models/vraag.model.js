// const docentModel = require("./docent.model");

module.exports = (sequelize, Sequelize) => {
    const Vraag = sequelize.define("vraag", {
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
      type: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      vak: {
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
      },
    });
    
    // Docent.hasMany(Vraag);

    return Vraag;
  };
