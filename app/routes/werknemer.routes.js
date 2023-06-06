module.exports = app => {
    const werknemers = require("../controllers/werknemer.controller.js");
    const db = require("../models");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", werknemers.create);
  
    // Retrieve all werknemers
    router.get("/", werknemers.findAll);
  
    // Retrieve all published werknemers
    // router.get("/werknemer-docent/:id", werknemers.findAllByDocentId);
    router.get("/email", werknemers.findByEmail);

    router.get("/bedrijven/:id/werknemers", werknemers.findAllByBedrijfId);
    // Retrieve a single Tutorial with id
    router.get("/:id", werknemers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", werknemers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", werknemers.delete);
  
    // Delete all werknemers
    router.delete("/", werknemers.deleteAll);
  
    app.use('/api/werknemers', router);
  };