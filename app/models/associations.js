const Vraag = require("./vraag.model");
const Docent = require("./docent.model");


// Define associations here
Vraag.belongsTo(Docent, { foreignKey: "docentId", as: "docent" });
Docent.hasMany(Vraag, { foreignKey: "docentId", as: "vragen" });

// Export the models
module.exports = {
  Vraag,
  Docent,
};