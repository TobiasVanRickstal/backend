module.exports = (sequelize, Sequelize) => {
    const Vak = sequelize.define("vak", {
      name: {
        vak: Sequelize.STRING
      }
    });
  
    return Vak;
  };
  