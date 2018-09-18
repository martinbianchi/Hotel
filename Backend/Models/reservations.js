var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    date_reservation: {type: Date},
    checkin: {type: Date},
    checkout: {type: Date},
    rooms: [{type: Schema.Types.ObjectId, ref: 'Rooms'}],
    guests: [{type: Schema.Types.ObjectId, ref: 'Persons'}],
    extraservices: [{type: Schema.Types.ObjectId, ref: 'ExtraServices'}],
    client: {type: Schema.Types.ObjectId, ref: 'Persons'}
});

module.exports = mongoose.model('Reservations', schema);