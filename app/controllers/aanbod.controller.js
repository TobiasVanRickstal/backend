const db = require("../models");
const Aanbod = db.aanbods;
const Op = db.Sequelize.Op;

// Create and Save a new aanbod
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a aanbod
  const aanbod = {
    naam: req.body.naam,
    docent: req.body.docent,
    type: req.body.type,
    topic: req.body.topic,
    informatie: req.body.informatie,
    status: req.body.status,
    fase: req.body.fase,
    views: req.body.views,
    solicitanten: req.body.solicitanten,
    prijs: req.body.prijs,
    serie: req.body.serie ? req.body.serie : false,
  };

  // Save aanbod in the database
  Aanbod.create(aanbod)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the aanbod."
      });
    });
};

// Retrieve all aanbods from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Aanbod.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Aanbods."
        });
      });
};

// Find a single Aanbod with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Aanbod.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Aanbod with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Aanbod with id=" + id
        });
      });
};

// Update a Aanbod by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Aanbod.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Aanbod was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Aanbod with id=${id}. Maybe Aanbod was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Aanbod with id=" + id
        });
      });
};

// Delete a Aanbod with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Aanbod.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Aanbod was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Aanbod with id=${id}. Maybe Aanbod was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Aanbod with id=" + id
        });
      });
};

// Delete all Aanbods from the database.
exports.deleteAll = (req, res) => {
    Aanbod.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Aanbods were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Aanbods."
          });
        });
};

// Find all published Aanbods
exports.findAllByDocentId = (req, res) => {
    Aanbod.findAll({ where: { docent: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Aanbods."
      });
    });
};

