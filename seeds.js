const Appointment = require('./models/appointment');
const mongoose=require('mongoose');
const uri = "mongodb+srv://ritheek:user123@cluster0.ht83h.mongodb.net/Mentoring?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("failed")
})

const Appointment1=new Appointment({
    name:"Testing ",
    phone: "268205"
    });
const db=mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open",()=>{
    console.log("Database Connected");
});
Appointment1.save();
console.log("Saved");