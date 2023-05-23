module.exports = app => {
    const vraagController = require('../controllers/vraag.controller');
  
    const router = require("express").Router();
  
    // Create a new vraag
<<<<<<< HEAD
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
=======
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
>>>>>>> be67cf2da46c3f5a500295bb7f2277decb98a195
  
    app.use(router);
  };
  