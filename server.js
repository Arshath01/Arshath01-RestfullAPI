const makeConnection = require('./mongodb')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(express.json())
app.use(cors())



app.post('/api/data',async(req,res)=>{
    
    const clientResponse = await makeConnection();
    const {name,password} = req.body;
    console.log(name,password)
    
    res.status(200).json({message:'message from server',name:name,password:password})
   
})

app.get('/api/data',(req,res)=>{
  
    res.status(200).json({message:'message'})
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})