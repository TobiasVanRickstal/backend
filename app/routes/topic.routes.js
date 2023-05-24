module.exports = app => {
    const topics = require("../controllers/topic.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", topics.create);
  
    // Retrieve all topics
    router.get("/", topics.findAll);
  
    // Retrieve a single vraag by id
    router.get("/:id", topics.findOne);

    app.use('/api/topics', router);
  };