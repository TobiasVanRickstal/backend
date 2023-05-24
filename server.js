const express = require("express");
// Express is for building the Rest apis
const bodyParser = require("body-parser");
// body-parser helps to parse the request and create the req.body object
const cors = require("cors");
// cors provides Express middleware to enable CORS with various options.

const path = __dirname + '/app/views/';
const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  // res.json({ message: "Welcome to Tobias application." });
  res.sendFile(path + "index.html");
});

// In development, you may need to drop existing tables and re-sync database. 
// Just use force: true as following code:
const db = require("./app/models");

// TODO RESET DATABASE
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./app/routes/docent.routes")(app);
require("./app/routes/vraag.routes")(app);
require("./app/routes/werknemer.routes")(app);
require("./app/routes/bedrijf.routes")(app);
require("./app/routes/type.routes")(app);
require("./app/routes/topic.routes")(app);
require("./app/routes/vak.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});