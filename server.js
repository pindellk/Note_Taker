// Establish dependencies
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
require("./routes/apiRoutes")(router);
require("./routes/htmlRoutes")(router);

// Server listener
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

