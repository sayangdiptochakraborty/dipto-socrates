/* Packages */
const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const bodyparser = require('body-parser');

/* Mongo DB Live Database Connection */
const uri = 'mongodb://sayangdipto:Hello1234@cluster0-shard-00-00.hfats.mongodb.net:27017,cluster0-shard-00-01.hfats.mongodb.net:27017,cluster0-shard-00-02.hfats.mongodb.net:27017/Socrates?ssl=true&replicaSet=atlas-yxizkt-shard-0&authSource=admin&retryWrites=true&w=majority'
const app = express();

/* API Files */
const login = require('./routes/login');
const signup = require('./routes/signup');

/* Set up MongoDB Connection */
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB"));

/* Parsers for Request Bodies */
app.use(express.json());
app.use(bodyparser.urlencoded({parameterLimit: 100000,limit: '50mb',extended: true}));
app.use(bodyparser.json());

/* Allow Cross Origin API Calls */
app.use(cors());

/*Port Set for Heroku */
var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on port 3000!'));

/* Static Webpages */
app.use(express.static('frontend'));

/* Two APIs */ 
app.use('/login',login);
app.use('/signup',signup);