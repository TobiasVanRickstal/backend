module.exports = app => {
    const vragen = require('../controllers/vraag.controller.js');
  
    const router = require("express").Router();
  
    // Create a new vraag
    router.post("/", vragen.create);
  
    // Retrieve all vragen
    router.get("/", vragen.findAll);
  
    // Retrieve a single vraag by id
    router.get("/:id", vragen.findOne);
  
    // Update a vraag by id
    router.put("/:id", vragen.update);
  
    // Delete a vraag by id
    router.delete("/:id", vragen.delete);
  
    // Delete all vragen
    router.delete("/", vragen.deleteAll);
  
    // Retrieve all vragen by docentId
    router.get("/docenten/:id/vragen", vragen.findAllByDocentId);
  
    app.use('/api/vragen', router);
  };
  