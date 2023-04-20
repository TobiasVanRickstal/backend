module.exports = app => {
    const bedrijven = require("../controllers/bedrijf.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", bedrijven.create);
  
    // Retrieve all bedrijven
    router.get("/", bedrijven.findAll);
  
    // Retrieve all published bedrijven
    // router.get("/bedrijf-docent/:id", bedrijven.findAllByDocentId);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", bedrijven.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", bedrijven.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", bedrijven.delete);
  
    // Delete all bedrijven
    router.delete("/", bedrijven.deleteAll);
  
    app.use('/api/bedrijven', router);
  };