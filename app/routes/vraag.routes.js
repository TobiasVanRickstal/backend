module.exports = app => {
    const vraagController = require('../controllers/vraag.controller');
  
    const router = require("express").Router();
  
    // Create a new vraag
    router.post("/vragen", vraagController.create);
  
    // Retrieve all vragen
    router.get("/vragen", vraagController.findAll);
  
    // Retrieve a single vraag by id
    router.get("/vragen/:id", vraagController.findOne);
  
    // Update a vraag by id
    router.put("/vragen/:id", vraagController.update);
  
    // Delete a vraag by id
    router.delete("/vragen/:id", vraagController.delete);
  
    // Delete all vragen
    router.delete("/vragen", vraagController.deleteAll);
  
    // Retrieve all vragen by docentId
    router.get("/docenten/:id/vragen", vraagController.findAllByDocentId);
  
    app.use(router);
  };
  