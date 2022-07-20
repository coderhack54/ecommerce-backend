const express = require("express");
const router = express.Router();
const model = require("../models/productModel");

router.get("/add", () => {
  console.log("data successfully added");
  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
