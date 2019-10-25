var bodyParser = require('body-parser');

//set port
var port = process.env.PORT || 3000;
var logger = require('logger logged');

//configure dotenv
require('dotenv').config();

//mongoose schema
require('./models/User')
require('./models/Pet')
require('./models/Appointment')
require('./models/Vaccination')
require('./models/Medication')