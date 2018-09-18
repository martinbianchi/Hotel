var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    description: {type: String},
    rooms: [{type: Schema.Types.ObjectId, ref: 'Rooms'}],
});

module.exports = mongoose.model('Beds', schema);