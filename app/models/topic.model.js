module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define("topic", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Topic;
  };
  