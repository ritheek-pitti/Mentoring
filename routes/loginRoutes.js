const express = require('express');
const router =express.Router();
const AuthController = require("../controllers/Authcontroller");

router.post('/register',AuthController.register)


module.exports= router;
