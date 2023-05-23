module.exports = app => {
    const vraagController = require('../controllers/vraag.controller');
  
    const router = require("express").Router();
  
    // Create a new vraag
    router.post("/vraags", vraagController.create);
  
    // Retrieve all vraags
    router.get("/vraags", vraagController.findAll);
  
    // Retrieve a single vraag by id
    router.get("/vraags/:id", vraagController.findOne);
  
    // Update a vraag by id
    router.put("/vraags/:id", vraagController.update);
  
    // Delete a vraag by id
    router.delete("/vraags/:id", vraagController.delete);
  
    // Delete all vraags
    router.delete("/vraags", vraagController.deleteAll);
  
    // Retrieve all vraags by docentId
    router.get("/docenten/:id/vraags", vraagController.findAllByDocentId);
  
    app.use(router);
  };
  