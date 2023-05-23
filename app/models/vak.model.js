module.exports = (sequelize, Sequelize) => {
  const Vak = sequelize.define("vak", {
    name: {
      type: Sequelize.STRING // Specify the data type as Sequelize.STRING
    }
  });

  return Vak;
};
