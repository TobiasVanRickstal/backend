const db = require("../models");
const Vraag = db.vragen;
const Op = db.Sequelize.Op;

// Create and Save a new vraag
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a vraag
  const vraag = {
    naam: req.body.naam,
    docent: req.body.docent,
    type: req.body.type,
    topic: req.body.topic,
    informatie: req.body.informatie,
    status: req.body.status,
    vak: req.body.vak,
    fase: req.body.fase,
    periodes: req.body.periodes,
    difficulty: req.body.difficulty,
    views: req.body.views,
    solicitanten: req.body.solicitanten,
    prijs: req.body.prijs,
    serie: req.body.serie ? req.body.serie : false,
  };

  // Save vraag in the database
  Vraag.create(vraag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the vraag."
      });
    });
};

// Retrieve all vragen from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Vraag.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vragen."
        });
      });
};

// Find a single Vraag with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vraag.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Vraag with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Vraag with id=" + id
        });
      });
};

// Update a Vraag by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Vraag.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vraag was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Vraag with id=${id}. Maybe Vraag was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vraag with id=" + id
        });
      });
};

// Delete a Vraag with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Vraag.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Vraag was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Vraag with id=${id}. Maybe Vraag was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vraag with id=" + id
        });
      });
};

// Delete all Vragen from the database.
exports.deleteAll = (req, res) => {
    Vraag.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Vragen were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Vragen."
          });
        });
};

// Find all published Vragen
exports.findAllByDocentId = (req, res) => {
    Vraag.findAll({ where: { docent: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vragen."
      });
    });
};

