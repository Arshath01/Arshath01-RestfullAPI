const makeConnection = require('./mongodb')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(express.json())
app.use(cors())



app.post('/api/data',(req,res)=>{
    const {name,password} = req.body;
    console.log(name,password)
    
    res.status(200).json({message:'data recieved succesfully'})
})

app.get('/api/data',(req,res)=>{
  
    res.status(200).json({message:'success'})
})

app.listen(port,async()=>{
    const clientResponse = await makeConnection();
    console.log(`server is running on the port ${port}`)
})