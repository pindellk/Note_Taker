// Establish dependencies
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const noteDb = require("../db/db.json");

// Require package for generating unique ids
const uuid = require("uuid");

exports.display = function (req, res) {
    res.json(noteDb);
}

exports.add = (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    };
    noteDb.push(newNote);
    writeFileAsync("./db/db.json", JSON.stringify(noteDb))
        .then(() => {
            console.log("Note database has been updated!")
        })
    console.log("New note has been added!");
    res.json(noteDb);
}

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    for (let i = 0; i < noteDb.length; i++) {
        if (id === noteDb[i].id) {
            noteDb.splice(i, 1);
            let revisedDb = JSON.stringify(noteDb, null, 2);
            writeFileAsync("./db/db.json", revisedDb)
            .then(() => {
                console.log("Note has been deleted")
            });
        }
    }
    res.json(noteDb);
}
