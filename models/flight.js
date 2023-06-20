const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airport: String,
}, {
    timestamps: true
});


//complie the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)


