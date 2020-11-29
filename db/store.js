// Establish dependencies
const path = require("path");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Require package for generating unique ids
const uuid = require("uuid");

exports.display = function (req, res) {
    return readFileAsync("./db.json", "utf8")
        .then((data) => {
            return res.json(JSON.parse(data));
        });
}

exports.add = (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text,
    };
    // readFileAsync("./db.json", "utf8")
    //     .then((data) => {
    //         let notes = JSON.parse(data);
    //         notes.push(newNote);
    //         writeFileAsync("./db.json", JSON.stringify(notes))
    //             .catch(err => console.error(err));
    //     })

    updateDb("./db.json", data => {
        let notes = JSON.parse(data);
        notes.push(newNote);
        return notes;
    })
};

exports.delete = (req, res) => {
    const id = req.params.id;
    // readFileAsync("./db.json", "utf8")
    //     .then((data) => {
    //         let notes = JSON.parse(data);
    //         notes = notes.filter(note => id !== note.id);
    //         writeFileAsync("./db.json", JSON.stringify(notes));
    //     })
    //     .catch(err => console.error(err));

    updateDb('./db.json', data => {
        let notes = JSON.parse(data);
        notes = notes.filter(note => note.id !== id);
        return notes;
    })
}

const updateDb = (db, callback) => {
    readFileAsync(db, 'utf8')
        .then(callback)
        .then(data => writeFileAsync(db, JSON.stringify(data)))
        .catch(err => console.error(err));    
}