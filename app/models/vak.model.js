module.exports = (sequelize, Sequelize) => {
  const Vak = sequelize.define("vak", {
    naam: {
      type: Sequelize.STRING // Specify the data type as Sequelize.STRING
    }
  });

  return Vak;
};
