module.exports = (sequelize, Sequelize) => {
    const Docent = sequelize.define("docent", {
      naam: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      extern: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Docent;
  };
