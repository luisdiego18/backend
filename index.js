const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/prod")(app);

const db = "mongodb+srv://admin:admin@mybackend.ld7vcw6.mongodb.net/mybackend";
// const db = "mongodb://localhost/mydatabase";

// Connectiong to mongodb localhost
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDb"))
  .catch((error) => console.error("Connected to MongoDB"));

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}`));
