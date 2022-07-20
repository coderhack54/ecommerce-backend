const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
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

router.post("/authenticate", (req, res) => {
  const formdata = req.body;
  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((result) => {
      if (result) {
        // user exists in database
        res.status(200).json(result);
      } else {
        // user not exist in database
        res.status(400).json(result);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  // setTimeout(() => {
  //     Model.find({})
  //     .then((result) => {
  //         console.log(result);
  //         res.status(200).json(result);
  //     }).catch((err) => {
  //         console.error(err);
  //         res.status(500).json(err);
  //     });
  // }, 5000);

  Model.find({})
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// http://localhost:3000/user/delete/46448616
router.delete("/delete/:userid", (req, res) => {
  // colon means a parameter in address

  Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.put("/update/:userid", (req, res) => {
  Model.findByIdAndUpdate(req.params.userid, req.body)
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
