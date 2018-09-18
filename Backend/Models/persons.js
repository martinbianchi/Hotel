var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String},
    surname: {type: String},
    dni: {type:String},
    email: {type:String},
    phone: {type: String},
    address: {type: String},
    city: {type: String},
    province: {type: String},
    country: {type:String},
    reservations: [{type: Schema.Types.ObjectId, ref: 'Reservations'}]
});

module.exports = mongoose.model('Persons', schema);