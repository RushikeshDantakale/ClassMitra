const express = require('express');
const app = express();
app.use(express.json());




app.post("/login",(req,res)=>{
    
    const {username , password} = req.body;
if(!username || !password){
res.json({error:"inputs cannot be empty!"});
}else{
    if(username === 'admin' && password === 'admin'){
        res.status(200).json({message:"login successful!"});
    }else{
        res.status(400).json({error:"invalid credentials!"});
    }
}
})





app.listen(3000,()=>{
    console.log("server is running on port 3000");
})