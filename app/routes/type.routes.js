module.exports = app => {
    const types = require("../controllers/type.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", types.create);
  
    // Retrieve all types
    router.get("/", types.findAll);

    // Retrieve a single vraag by id
    router.get("/:id", types.findOne);
  
    app.use('/api/types', router);
  };