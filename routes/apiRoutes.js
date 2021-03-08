const router = require("express").Router();
const noteTakerDB = require("../db/db.json");
const path = require("path");
const fs = require("fs");
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// router.get("/api/notes", (req, res) => {});

// router.post("/api/notes", (req, res) => {});

//pseudo below to go above
//module.exports = router => {}
router.get("/api/notes", function (req, res) {
  res.json(noteTakerDB);
  note = JSON.stringify(noteTakerDB);
  console.log(noteTakerDB);
  res = JSON.parse(res);
  console.log(res);
  fs.readFile(noteTakerDB, function (err, res) {
    if (error) {
      return console.log(error);
    }
    //console.log(notes);
    console.log(noteTakerDB);

    //   fs.readFile(__dirname + "/db/db.json", "utf8", function (err, res) {
    //     if (error) {
    //       return console.log(error);
    //     }

    // fs.readFile("db/db.json","utf8", (err, data) => {

    //     if (err) throw err;

    //     var notes = JSON.parse(data);
    // app.get('/api/notes', (req, res) => res.json(notes));
    //fs.readfile
    //JSON.parse
    //send it to browser res.send or res.json
  });
});
router.post("/api/notes", function (req, res) {
  //req.body notes
  //read file again as an array
  //create a unique id
  //push note with unique id into the array
  // fs.writefile JSON.stringy version of the array
  // if error res.json(false)
  // else res.json(true);
});
module.exports = router;
