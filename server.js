'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const api = require('./app/routes')
const cors = require('cors')
const constants = require('./app/constants')
mongoose.Promise = global.Promise;

// Serve static assets
app.use(cors());//use cors for all origins
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api",api)

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,'dist','index.html'));
});

mongoose.connect( constants.MONGOURL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose corrinedo")
    app.listen(constants.PORT, () => {
        console.log("Servidor corriendo OK!")
    })
})
