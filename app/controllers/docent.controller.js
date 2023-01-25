const db = require("../models");
const Docent = db.docents;
const Op = db.Sequelize.Op;

// Create and Save a new docent
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a docent
  const docent = {
    naam: req.body.naam,
    mail: req.body.mail,
    password: req.body.password,
    admin: req.body.admin ? req.body.admin : false,
    extern: req.body.extern ? req.body.extern : false
  };

  // Save docent in the database
  Docent.create(docent)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the docent."
      });
    });
};

// Retrieve all docents from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Docent.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Docents."
        });
      });
};

// Find a single Docent with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Docent.findByPk(id)
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

// Update a Docent by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Docent.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Docent was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Docent with id=${id}. Maybe Docent was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Docent with id=" + id
        });
      });
};

// Delete a Docent with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Docent.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Docent was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Docent with id=${id}. Maybe Docent was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Docent with id=" + id
        });
      });
};

// Delete all Docents from the database.
exports.deleteAll = (req, res) => {
    Docent.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Docents were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Docents."
          });
        });
};


exports.findAllAdmin = (req, res) => {
    Docent.findAll({ where: { admin: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Docents."
      });
    });
};

exports.findAllExtern = (req, res) => {
    Docent.findAll({ where: { extern: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Docents."
      });
    });
};

