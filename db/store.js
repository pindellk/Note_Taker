// Establish dependencies
const util = require("util");
const fs = require("fs");

// Generate unique ids
const uuidv4 = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        // return readFileAsync("db/db.json", "utf8");
        return readFileAsync("db/db.json", "utf8") 
            .then((json) => {
                return json;
            })
            .catch((err) => {
                console.log("Error", err);
            });
    }

    // write(note) {
    //     return writeFileAsync("db/db.json", JSON.stringify(note));
    // }

    // getNotes() {
    //     return this.read().then((notes) => {
    //         let parseNotes;

    //         try {
    //             parseNotes = [].concat(JSON.parse(notes));
    //         } catch (err) {
    //             parseNotes = [];
    //         }

    //         return parseNotes;
    //     });
    // }
    
    // needs testing
    // addNote(note) {
    //     return fs.appendFile("db/db.json", JSON.stringify(note));    
    // }
}

module.exports = Store;