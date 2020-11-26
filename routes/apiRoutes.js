// // Require express router dependency
// const router = require("express").Router();

// Require store class 
const noteStore = require("../db/store");

module.exports = function (app) {

    // GET request to display notes
    app.get("/api/notes", noteStore.display);

    // POST request to add note
    app.get("/api/notes", noteStore.add);

    // DELETE note based on id
    app.delete("/api/notes/:id", noteStore.delete);
}

// module.exports = router;