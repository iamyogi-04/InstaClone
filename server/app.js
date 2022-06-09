const express = require('express')
const mongoose = require('mongoose');
const app= express();
const cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser');
const PORT=5000;

mongoose.connect('mongodb+srv://yogesh:yogesh@insta-clone.icnuron.mongodb.net/?retryWrites=true&w=majority',function(){
    console.log("mongoose connected")
})

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use('images', express.static('public/images'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get('/', function(req, res){
    res.send({message: "Welcome to InstaClone Api Service"})
})

app.use('/api/v1', require('./routes/postRoute'))

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server started on port ' + PORT)
})
// http://localhost:5000