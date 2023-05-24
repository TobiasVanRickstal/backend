
const db = require("../models");
const Vak = db.vaks;
const Op = db.Sequelize.Op;

// Create and Save a new vak
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a vak
  const vak = {
    naam: req.body.naam,
  };

  // Save vak in the database
  Vak.create(vak)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the vak."
      });
    });
};

// Retrieve all vaks from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Vak.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vaks."
        });
      });
};

// Find a single Docent with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vak.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Docent with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Docent with id=" + id
      });
    });
};

