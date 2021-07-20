const path = require('path');
const express = require('express');
const app = express();
const port =3000;
const Appointment = require('./models/appointment');
const mongoose=require('mongoose');
const uri = "mongodb+srv://ritheek:user123@cluster0.ht83h.mongodb.net/Mentoring?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>{
    console.log("connected to mongodb");
})
.catch(err=>{
    console.log("failed")
})

// var bodyParser= require('body-parser')
// var urlEncodedParser= bodyParser.urlencoded
var cors = require('cors')
app.use(cors());
app.use(express.urlencoded({extended : true}));
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res,) => {
   res.sendFile(__dirname+"//public/views/index.html");
});
app.post('/add', async(req,res)=>{
    //console.log(req);
    const newAppointment = new Appointment(req.body);
    console.log(newAppointment.id);
    await newAppointment.save();
});
app.listen(port);