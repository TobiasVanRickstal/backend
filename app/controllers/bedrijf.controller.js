const db = require("../models");
const Bedrijf = db.bedrijven;
const Op = db.Sequelize.Op;

// Create and Save a new bedrijf
exports.create = (req, res) => {
   // Validate request
   if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content can not be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a bedrijf
  const bedrijf = {
    naam: req.body.naam,
    email: req.body.email,
    BTW: req.body.BTW,
    address: req.body.address,
    abbonement: req.body.abbonement
  };

  // Save bedrijf in the database
  Bedrijf.create(bedrijf)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the bedrijf."
      });
    });
};

// Retrieve all bedrijven from the database.
exports.findAll = (req, res) => {
    const naam = req.query.naam;
    var condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;
  
    Bedrijf.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Bedrijfs."
        });
      });
};

// Find a single Bedrijf with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Bedrijf.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Bedrijf with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Bedrijf with id=" + id
        });
      });
};

// Update a Bedrijf by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Bedrijf.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bedrijf was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Bedrijf with id=${id}. Maybe Bedrijf was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Bedrijf with id=" + id
        });
      });
};

// Delete a Bedrijf with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Bedrijf.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bedrijf was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Bedrijf with id=${id}. Maybe Bedrijf was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Bedrijf with id=" + id
        });
      });
};

// Delete all Bedrijfs from the database.
exports.deleteAll = (req, res) => {
    Bedrijf.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Bedrijfs were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Bedrijfs."
          });
        });
};

// // Find all published Bedrijfs
// exports.findAllByDocentId = (req, res) => {
//     Bedrijf.findAll({ where: { docent: id } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Bedrijfs."
//       });
//     });
// };

