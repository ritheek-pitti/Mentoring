const express = require('express');
const router =express.Router();
const Appointment = require("../models/appointmentmodel");

// router.get('/',(req, res,) => {
//     res.sendFile("D:\Mentoring\views\index.html"); 
//  });
 router.post('/add', async(req,res)=>{
    
     const newAppointment = new Appointment(req.body);
     await newAppointment.save();
     const id = newAppointment.id;
     res.json(id);
 });
 router.put('/update/:id',async(req,res)=>{
     const {id}=req.params;
     const update= await Appointment.findByIdAndUpdate(id,req.body);
 });
 router.get('/all',async(req,res)=>{
     const data= await Appointment.find();
     //console.log(data);
     res.render('displayall.ejs',{data});
 });
 router.post('/login',(req,res)=>{
     res.redirect('/all');
 })

//  router.get('/login',(req,res)=>{
//      res.sendFile(__dirname+"/views/login.html");
//  })
 module.exports= router;

