// Establish dependencies
const router = require("express").Router();
const notes = require("../db/db");

// GET `/api/notes` - reads the `db.json` file and returns all saved notes as JSON
router.get('/api/notes', (req, res) => {        
    res.json(notes);
})

// POST `/api/notes` - receives a new note to save on the request body, 
// adds it to the `db.json` file, and then return the new note to the client.
router.post("/api/notes", (req, res) => {
    let newNote = req.body;
})

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with 
// the given `id` property, and then rewrite the notes to the `db.json` file.
// router.get("/api/nodes/:id", (req, res) => {
//     res.json()
// })

module.exports = router;