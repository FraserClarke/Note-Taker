const router = require("express").Router();
const noteTakerDB = require("../db/db.json");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const uuid = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
var stringDB = JSON.stringify(noteTakerDB);
// // router.get("/api/notes", (req, res) => {});

// // router.post("/api/notes", (req, res) => {});

// //pseudo below to go above
//module.exports = router => {}
router.get("/api/notes", function (req, res) {
  fs.readFile(__dirname + "../db/db.json", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    
    // var data = JSON.parse(data);
    // console.log(data);
    // app.get("/api/notes", function (req, data2) {
    // Read the db.json file and return all saved notes as JSON.
    // res.json(data2);
    // });
  });
});
// router.get("/api/notes", function (req, res) {
//   fs.readFile(stringDB, function (err, res) { // read path
//     if (err) {
//       return console.log(err);
//     }
//     //console.log(notes);
//     console.log(res);
//     console.log(noteTakerDB);
//     const readNotes = JSON.parse(res);
//     readNotes();
//   });
//     res.json(noteTakerDB);
//   note = JSON.stringify(noteTakerDB);
//   console.log(noteTakerDB);
//   req = JSON.parse(req);
//   console.log(req);
//   fs.readFile(noteTakerDB, function (err, res) {
//     if (error) {
//       return console.log(error);
//     }
//console.log(notes);
console.log(noteTakerDB);
//});
//});

// router.get("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "./db/db.json"), (err, data) => {
//     if (err) throw err;
//     const notes = JSON.parse(data);
//     res.json(notes);
//   });
// });

// router.post("/api/notes", function (req, res) {
//   fs.readFile(path.join(__dirname, "./db/db.json"), (err, data) => {
//     if (err) throw err;
//     const notes = JSON.parse(data);
//     const newNote = req.body;
//     newNote.id = uuid.v4();
//     notes.push(newNote);

//     const createNote = JSON.stringify(notes);
//     fs.writeFile(path.join(__dirname, "./db/db.json"), createNote, (err) => {
//       if (err) throw err;
//     });
//     res.json(newNote);
//   });
// });

// //   fs.readFile(__dirname + "/db/db.json", "utf8", function (err, res) {
// //     if (error) {
// //       return console.log(error);
// //     }

// // fs.readFile("db/db.json","utf8", (err, data) => {

// //     if (err) throw err;

// //     var notes = JSON.parse(data);
// // app.get('/api/notes', (req, res) => res.json(notes));
// //fs.readfile
// //JSON.parse
// //send it to browser res.send or res.json
// //});
// //});
// router.post("/api/notes", function (req, res) {
//   //req.body notes
//   newPostNotes = req.body;

//   fs.readFile(__dirname + "/db/db.json", "utf8", function (err, res) {
//     if (err) {
//       return console.log(err);
//     }
//   });
//   console.log(res);
//   //read file again as an array

//   //create a unique id
//   //push note with unique id into the array
//   // fs.writefile JSON.stringy version of the array
//   // if error res.json(false)
//   // else res.json(true);
// });
module.exports = router;
