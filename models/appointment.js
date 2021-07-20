const mongoose=require('mongoose');
//const Schema=mongoose.Schema;

const AppointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        //required:true
    },
    phone:{
        type:Number,
       // requiredtrue
    },
    Gender : {
        type: String,
        //enum : ['Female', 'Male'],
    },
    problem:{
        type: String,
    },
    dateAndTime:{
        //required : true,
    }
});
const Appointment=mongoose.model('appointment',AppointmentSchema);
module.exports= Appointment;