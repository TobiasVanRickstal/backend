module.exports = app => {
    const aanbods = require("../controllers/aanbod.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", aanbods.create);
  
    // Retrieve all aanbods
    router.get("/", aanbods.findAll);
  
    // Retrieve all published aanbods
    // router.get("/aanbod-docent/:id", aanbods.findAllByDocentId);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", aanbods.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", aanbods.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", aanbods.delete);
  
    // Delete all aanbods
    router.delete("/", aanbods.deleteAll);
  
    app.use('/api/aanbods', router);
  };