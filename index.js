const express=require("express");
const userRouter=require("./routers/userRouter")
const memeRouter=require("./routers/memeRouter");
const productRouter=require("./routers/productRouter");
const cors = require("cors");

const app=express();
const port = 7000;

//for parsing request data
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
}))
//address
app.use("/meme",memeRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);


app.get('/home',(req,res)=>{
    console.log("request at home");
    res.send("this is the home page");
})

app.listen(port,()=>{
    console.log("server connected");
})