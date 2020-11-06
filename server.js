// Establish dependencies
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use("/api/notes", require("./routes/apiRoutes"));
app.use("/api/notes", require("./routes/htmlRoutes"));

// Server listener
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));

