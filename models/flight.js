const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: { type: String, enum: ['AA', 'SW', 'UA', 'DL'] },
    airport: {
      type: String,
      default: 'ORD',
      enum: ['ORD', 'LAX', 'JFK', 'DEN'],
    },
    flightNo: { type: Number, min: 10, max: 9999 },
    departs: {
      type: Date,
      default: function () {
        let day = new Date().getDay();
        let month = new Date().getMonth();
        let year = new Date().getFullYear() + 1;
        return new Date().setFullYear(year, month, day);
      },
    },
  },
  {
    timestamps: true,
  },
);

//complie the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
