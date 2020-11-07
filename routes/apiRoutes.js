// Establish dependencies
const router = require("express").Router();

const uuid = require("uuid");
const Store = require("../db/store");
const noteStore = new Store();

// GET `/api/notes` - reads the `db.json` file and returns all saved notes as JSON
router.get('/notes', (req, res) => {        
    res.json(noteStore.read());
})

// POST `/api/notes` - receives a new note to save on the request body, 
// adds it to the `db.json` file, and then return the new note to the client.
router.post("/notes", (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    };
    if (!newNote.title) {
        return res.status(400).json({ msg: "Be sure to add your note!"});
    }
    notes.push(newNote);
    res.json(notes);
})

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete
// In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with 
// the given `id` property, and then rewrite the notes to the `db.json` file.
// router.get("/api/nodes/:id", (req, res) => {
//     res.json()
// })

module.exports = router;