module.exports = app => {
    const vaks = require("../controllers/vak.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", vaks.create);
  
    // Retrieve all vaks
    router.get("/", vaks.findAll);

    // Retrieve a single vraag by id
    router.get("/:id", vaks.findOne);
  
    app.use('/api/vaks', router);
  };