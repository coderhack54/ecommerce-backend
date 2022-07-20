const mongoose = require('mongoose');

const url="mongodb+srv://AnmolSrivastava:Anmol123@cluster0.7bzrq.mongodb.net/mernwss300?retryWrites=true&w=majority";

//it returns a promise
// asynchronous operations are often used where there is a use of internet . the asynchornous opertions returns a promise
//.then .catch is used
//shortcut for .then .catch => thenc
mongoose.connect(url)
.then(()=>{console.log("connection successful")})
.catch((err)=>{
    console.error(err);
})

module.exports=mongoose;