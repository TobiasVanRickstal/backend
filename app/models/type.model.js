module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("type", {
    naam: {
      type: Sequelize.STRING
    }
  });

  return Type;
};