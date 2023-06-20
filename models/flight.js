const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: {type: String, default: 'ORD'},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, 
        default: function(){
            return new Date().setFullYear(getFullYear() + 1, getMonth(), getDate())
        } 
    }
}, {
    timestamps: true
});


//complie the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)


