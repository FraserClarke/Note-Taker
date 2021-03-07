const router = require("express").Router();
const noteTakerDB = require("../db/db.json");

router.get("/api/notes", (req, res) => {});

router.post("/api/notes", (req, res) => {});

module.exports = router;
//pseudo below to go above
const fs = require("fs");
router.get("/api/notes", function (req, res) {
  //fs.readfile
  //JSON.parse
  //send it to browser res.send or res.json
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
