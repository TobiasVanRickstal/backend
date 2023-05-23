module.exports = (sequelize, Sequelize) => {
    const Docent = sequelize.define("docent", {
      naam: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      extern: {
        type: Sequelize.BOOLEAN
      }
    });
    Docent.associate = (models) => {
      Docent.hasMany(models.Vraag, {
        foreignKey: 'docentId',
        as: 'vragen',
      });
    };
  
    return Docent;
  };
