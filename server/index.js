const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended:false}))

app.get('/',(req,res) =>{
    res.json({
        status:'Sucess',
        message:'All good!',
    })
})
app.get('/health', (req, res) => {
    res.status(200).send("Server is up and running");
});
app.listen(process.env.port,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('listening on port 4000'))
    .catch(error => console.log(error))
})