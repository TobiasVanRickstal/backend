module.exports = (sequelize, Sequelize) => {
<<<<<<< HEAD
  const Vak = sequelize.define("vak", {
    name: {
      type: Sequelize.STRING // Specify the data type as Sequelize.STRING
    }
  });

  return Vak;
};
=======
    const Vak = sequelize.define("vak", {
      name: {
        vak: Sequelize.STRING
      }
    });
  
    return Vak;
  };
  
>>>>>>> be67cf2da46c3f5a500295bb7f2277decb98a195
