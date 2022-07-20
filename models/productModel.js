const {Schema,model}=require('../connection');

const schema= new Schema({
    name:String,
    rating:Number,
    price:Number,
    description:String,
    review:String,


}) 

module.exports=model("productcollection",schema);