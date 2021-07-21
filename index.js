const path = require('path');
const express = require('express');
const app = express();
const Appointment = require('./models/appointmentmodel');

const Routes = require('./routes/routes')
const cors = require('cors');
const AuthRoute=require('./routes/loginRoutes')
const mongoose=require('mongoose');
const uri = "mongodb+srv://ritheek:user123@cluster0.ht83h.mongodb.net/Mentoring?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>{
    console.log("connected to mongodb");
})
.catch(err=>{
    console.log("Error")
})


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req, res,) => {
   res.sendFile(__dirname+"/views/index.html");
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/views/login.html");
})

app.use('/',Routes);
app.use('/admin',AuthRoute);

app.listen(3000);