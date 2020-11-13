let express = require("express");

let router = express.Router();

//Query string
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send("have requested a person " + req.query.name);
  } else {
    res.send("You have requested a person!");
  }
});

//Params property on request object
router.get("/person/:name", (req, res) => {
  res.send("have requested a person " + req.params.name);
});

router.get("/error", (req, res) => {
  throw new Error("This is a Pushed error");
});

module.exports = router;
