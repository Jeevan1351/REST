let CustomerModel = require("../models/customer.models");

let express = require("express");
const request = require("express");

let router = express.Router();

//Creat a new customer
//Post localhost:3000/customer
router.post("/customer", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing!");
  }

  let model = CustomerModel(req.body);
  model
    .save()
    .then((doc) => {
      if (!doc || doc.length == 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameters email!");
  }

  CustomerModel.findOne({
    email: req.query.email,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).jason(err);
    });
});

router.put("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameters email!");
  }

  CustomerModel.findOneAndUpdate(
    {
      email: req.query.email,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).jason(err);
    });
});

router.delete("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameters email!");
  }

  CustomerModel.findOneAndRemove({
    email: req.query.email,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).jason(err);
    });
});

module.exports = router;
