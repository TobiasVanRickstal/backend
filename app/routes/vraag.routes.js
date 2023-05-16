module.exports = app => {
    const vragen = require("../controllers/vraag.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vragen.create);
  
    // Retrieve all vragen
    router.get("/", vragen.findAll);
  
    // Retrieve all published vragen
    // router.get("/vraag-docent/:id", vragen.findAllByDocentId);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", vragen.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", vragen.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", vragen.delete);
  
    // Delete all vragen
    router.delete("/", vragen.deleteAll);
  
    app.use('/api/vragen', router);
  };