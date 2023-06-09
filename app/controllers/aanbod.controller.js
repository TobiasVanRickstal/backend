const db = require("../models");
const Aanbod = db.aanbods;
const Docent = db.docents;
const Werknemer = db.werknemers;
const Bedrijf = db.bedrijven;
const Op = db.Sequelize.Op;

// Create and Save a new aanbod
exports.create = (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content cannot be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a aanbod
  const aanbod = {
    naam: req.body.naam,
    docentId: req.body.docentId,
    werknemerId: req.body.werknemerId,
    bedrijfId: req.body.bedrijfId,
    informatie: req.body.informatie,
    status: req.body.status,
    views: req.body.views,
    prijs: req.body.prijs,
    datum: req.body.datum,
  };

  // Save aanbod in the database
  Aanbod.create(aanbod)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the aanbod."
      });
    });
};

// Retrieve all aanbods from the database.
exports.findAll = (req, res) => {
  const naam = req.query.naam;
  const condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;

  Aanbod.findAll(
    { 
    where: condition,
    include: [
      {
        model: Docent,
        as: 'docent',
        attributes: ['id', 'naam']
      },
      {
        model: Werknemer,
        as: 'werknemer',
        attributes: ['id', 'naam']
      },
      {
        model: Bedrijf,
        as: 'bedrijf',
        attributes: ['id', 'naam']
      }
    ]
  }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Aanbods."
      });
    });
};

// Find a single Aanbod with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Aanbod.findByPk(id, {
    include: [
        {
            model: Docent,
            as: 'docent',
            attributes: ['id', 'naam']
        },
        {
            model: Werknemer,
            as: 'werknemer',
            attributes: ['id', 'naam']
        },
        {
            model: Bedrijf,
            as: 'bedrijf',
            attributes: ['id', 'naam']
        }
    ]
  })
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
        message: err.message || "Some error occurred while removing all Aanbods."
      });
    });
};

// Find all published Aanbods by docentId
exports.findAllByDocentId = (req, res) => {
  const docentId = req.params.id;

  Aanbod.findAll({ 
    where: { docentId: docentId },
    include: [
        {
            model: Docent,
            as: 'docent',
            attributes: ['id', 'naam']
        },
        {
            model: Werknemer,
            as: 'werknemer',
            attributes: ['id', 'naam']
        },
        {
            model: Bedrijf,
            as: 'bedrijf',
            attributes: ['id', 'naam']
        }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Aanbods."
      });
    });
};
exports.findAllByWerknemerId = (req, res) => {
    const werknemerId = req.params.id;
  
    Aanbod.findAll({ 
      where: { werknemerId: werknemerId },
      include: [
          {
              model: Docent,
              as: 'docent',
              attributes: ['id', 'naam']
          },
          {
              model: Werknemer,
              as: 'werknemer',
              attributes: ['id', 'naam']
          },
          {
              model: Bedrijf,
              as: 'bedrijf',
              attributes: ['id', 'naam']
          }
      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Aanbods."
        });
      });
  };
  exports.findAllByBedrijfId = (req, res) => {
    const bedrijfId = req.params.id;
  
    Aanbod.findAll({ 
      where: { bedrijfId: bedrijfId },
      include: [
          {
              model: Docent,
              as: 'docent',
              attributes: ['id', 'naam']
          },
          {
              model: Werknemer,
              as: 'werknemer',
              attributes: ['id', 'naam']
          },
          {
              model: Bedrijf,
              as: 'bedrijf',
              attributes: ['id', 'naam']
          }
      ]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Aanbods."
        });
      });
  };