// Establish dependencies
const path = require("path");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Require package for generating unique ids
const uuid = require("uuid");

// View db contents
exports.display = function (req, res) {
    return readFileAsync("./db.json", "utf8")
        .then((data) => {
            return res.json(JSON.parse(data));
        });
}

// Add new note
exports.add = (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    };

    updateDb("./db.json", data => {
        let notes = JSON.parse(data);
        notes.push(newNote);
        return notes;
    });
};

// Delete a note
exports.delete = (req, res) => {
    const id = req.params.id;

    updateDb("./db.json", data => {
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== id);
        return notes;
    });
}

// Handle readFileAsync and writeFileAsync for writing and deleting
const updateDb = (db, callback) => {
    readFileAsync(db, 'utf8')
        .then(callback)
        .then(data => writeFileAsync(db, JSON.stringify(data)))
        .catch(err => console.error(err));    
}