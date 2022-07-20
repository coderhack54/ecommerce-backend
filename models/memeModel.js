// const mongoose = require('../connection.js');
//or
const {Schema, model}= require('../connection.js');

const schema= new Schema({
    title: String,
    author: String,
    file: String,
    createdAt : { type:Date, default:new Date() }
})

module.exports= model('memesCollection',schema);        // instead of module.exports=model

