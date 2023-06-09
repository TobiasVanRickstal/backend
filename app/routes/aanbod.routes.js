module.exports = app => {
    const aanbods = require('../controllers/aanbod.controller.js');
  
    const router = require("express").Router();
  
    // Create a new vraag
    router.post("/", aanbods.create);
  
    // Retrieve all aanbods
    router.get("/", aanbods.findAll);
  
    // Retrieve a single vraag by id
    router.get("/:id", aanbods.findOne);
    
    // Update a vraag by id
    router.put("/:id", aanbods.update);
  
    // Delete a vraag by id
    router.delete("/:id", aanbods.delete);
  
    // Delete all aanbods
    router.delete("/", aanbods.deleteAll);
  
    // Retrieve all aanbods by docentId
    router.get("/docenten/:id/aanbods", aanbods.findAllByDocentId);

    router.get("/bedrijfs/:id/aanbods", aanbods.findAllByBedrijfId);

    router.get("/werknemers/:id/aanbods", aanbods.findAllByWerknemerId);
  
    app.use('/api/aanbods', router);
  };
  