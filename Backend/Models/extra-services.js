var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String},
    description: {type: String}
});

module.exports = mongoose.model('ExtraServices', schema);