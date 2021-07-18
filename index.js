const path = require('path');

const express = require('express');

const app = express();
var cors = require('cors')

app.use(cors());

//const adminRoutes = require('./routes/admin');

//app.use('/admin', adminRoutes);
app.use(express.static('public'));

app.use((req, res, next) => {
   res.sendFile(__dirname+"\\index.html");
});

app.listen(9000);