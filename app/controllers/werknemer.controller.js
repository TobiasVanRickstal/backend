
const db = require("../models");
const Werknemer = db.werknemers;
const Op = db.Sequelize.Op;

// Create and Save a new werknemer
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a werknemer
  const docent = {
    naam: req.body.naam,
    email: req.body.email,
    password: req.body.password,
    admin: req.body.admin ? req.body.admin : false,
    extern: req.body.extern ? req.body.extern : false
  };

  // Save werknemer in the database
  Werknemer.create(werknemer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the werknemer."
      });
    });
};

// Retrieve all werknemers from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Werknemer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Werknemers."
        });
      });
};

// Find a single Werknemer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Werknemer.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Werknemer with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Werknemer with id=" + id
        });
      });
};

// Update a Werknemer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Werknemer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Werknemer was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Werknemer with id=${id}. Maybe Werknemer was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Werknemer with id=" + id
        });
      });
};

// Delete a Werknemer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Werknemer.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Werknemer was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Werknemer with id=${id}. Maybe Werknemer was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Werknemer with id=" + id
        });
      });
};

// Delete all Werknemers from the database.
exports.deleteAll = (req, res) => {
    Werknemer.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Werknemers were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Werknemers."
          });
        });
};

// Find all published Werknemers
exports.findAllByDocentId = (req, res) => {
    Werknemer.findAll({ where: { docent: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Werknemers."
      });
    });
};

