const express = require("express");
const router= express.Router();
const Model=require('../models/memeModel')


router.post('/add',(req,res)=>{
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});
router.get('/getall',(req,res)=>{
    console.log(" all meme ");
    res.send("your meme");
});

module.exports=router;
