var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    number: {type: Number},
    description: {type: String},
    capactiy: {type:Number},
    services: [{type: Schema.Types.ObjectId, ref: 'Services'}],
    beds: [{type: Schema.Types.ObjectId, ref: 'Beds'}],
});

module.exports = mongoose.model('Rooms', schema);