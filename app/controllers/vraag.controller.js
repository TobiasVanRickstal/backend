const { Vraag, Docent, Op } = require('../models');

// Create and Save a new vraag
exports.create = (req, res) => {
  // Validate request
  if (!req.body.naam) {
    res.status(400).send({
      message: "Naam content cannot be empty! -->" + req.body.naam
    });
    return;
  }

  // Create a vraag
  const vraag = {
    naam: req.body.naam,
    docentId: req.body.docentId,
    typeId: req.body.typeId,
    topicId: req.body.topicId,
    informatie: req.body.informatie,
    status: req.body.status,
    vakId: req.body.vakId, // Updated field name
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
        message: err.message || "Some error occurred while creating the vraag."
      });
    });
};

// Retrieve all vraags from the database.
exports.findAll = (req, res) => {
  const naam = req.query.naam;
  const condition = naam ? { naam: { [Op.like]: `%${naam}%` } } : null;

  Vraag.findAll({ 
    where: condition,
    include: [
      {
        model: Docent,
        as: 'docentData',
        attributes: ['id', 'name']
      },
      {
        model: Type,
        as: 'typeData',
        attributes: ['id', 'name']
      },
      {
        model: Topic,
        as: 'topicData',
        attributes: ['id', 'name']
      },
      {
        model: Vak,
        as: 'vakData',
        attributes: ['id', 'name']
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Vraags."
      });
    });
};

// Find a single Vraag with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vraag.findByPk(id, {
    include: [
      {
        model: Docent,
        as: 'docentData',
        attributes: ['id', 'name']
      },
      {
        model: Type,
        as: 'typeData',
        attributes: ['id', 'name']
      },
      {
        model: Topic,
        as: 'topicData',
        attributes: ['id', 'name']
      },
      {
        model: Vak,
        as: 'vakData',
        attributes: ['id', 'name']
      }
    ]
  })
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

// Delete all Vraags from the database.
exports.deleteAll = (req, res) => {
  Vraag.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Vraags were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Vraags."
      });
    });
};

// Find all published Vraags by docentId
exports.findAllByDocentId = (req, res) => {
  const docentId = req.params.id;

  Vraag.findAll({ 
    where: { docentId: docentId },
    include: [
      {
        model: Docent,
        as: 'docentData',
        attributes: ['id', 'name']
      },
      {
        model: Type,
        as: 'typeData',
        attributes: ['id', 'name']
      },
      {
        model: Topic,
        as: 'topicData',
        attributes: ['id', 'name']
      },
      {
        model: Vak,
        as: 'vakData',
        attributes: ['id', 'name']
      }
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Vraags."
      });
    });
};
