module.exports = app => {
    const docents = require("../controllers/docent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", docents.create);
  
    // Retrieve all docents
    router.get("/", docents.findAll);
  
    // Retrieve all published docents
    router.get("/admin", docents.findAllAdmin);

    router.get("/extern", docents.findAllExtern);

    router.get("/email", docents.findByEmail);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", docents.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", docents.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", docents.delete);
  
    // Delete all docents
    router.delete("/", docents.deleteAll);
  
    app.use('/api/docents', router);
  };