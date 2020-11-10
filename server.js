// Establish dependencies
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// new 
app.use(express.static(__dirname + '/public'));

// Set up routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Server listener
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

