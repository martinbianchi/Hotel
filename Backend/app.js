// =====================================
// get the packages we need ============
// =====================================
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var cors           = require('cors');
var methodOverride = require('method-override');
//var jwt            = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config         = require('./config'); // get our config file


// =======================
// configuration =========
// =======================
const port = 3000; // set port
mongoose.connect(config.database, {useMongoClient: true },(err) => {
    console.log("ERROR ", err);
}); // connect to database

var app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());


// =======================
// routes ================
// =======================

require('./models/beds.js');
require('./models/rooms.js');
require('./models/persons.js');
require('./models/reservations.js');
require('./models/services.js');
require('./models/extra-services.js');

app.use(require('./routes/index.js'));

// get an instance of the router for api routes
var router=express.Router();
// apply the routes to our application
app.use(router);


// =======================
// start the server ======
// =======================
app.listen(port, () => {
    console.log('We are live on ' + port);
});