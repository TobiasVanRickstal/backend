module.exports = (sequelize, Sequelize) => {
    const Topic = sequelize.define("topic", {
      naam: {
        type: Sequelize.STRING
      }
    });
  
    return Topic;
  };
  