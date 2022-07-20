const {Schema,model}=require("../connection.js");

const schema= new Schema({
    // Name:String,
    // Age:Number,
    // MaritalStatus:String,
    // Interests:String
    username: String,
    password: String,
    email: String,
    dob:Date,
    createdAt : Date,
});

module.exports= model("userCollection",schema);