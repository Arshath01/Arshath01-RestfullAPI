const makeConnection = require('./mongodb')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(express.json())
app.use(cors())



app.post('/api/data',async(req,res)=>{
    try{
        const clientResponse = await makeConnection();
    const {name,password} = req.body;
    console.log(name,password)
    
    res.status(200).json({message:'message from server',name:name,password:password})
    }catch(err){
        res.status(404).json({error:"error occured"})
    }
})

app.get('/api/data',(req,res)=>{
  
    res.status(200).json({message:'success'})
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})