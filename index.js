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
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req, res,) => {
   res.sendFile(__dirname+"/views/index.html");
});
app.post('/add', async(req,res)=>{
   
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    const id = newAppointment.id;
    res.json(id);
});
app.put('/update/:id',async(req,res)=>{
    const {id}=req.params;
    const update= await Appointment.findByIdAndUpdate(id,req.body);
});
app.get('/all',async(req,res)=>{
    const data= await Appointment.find();
    //console.log(data);
    res.render('displayall.ejs',{data});
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/views/login.html");
})
app.listen(port);