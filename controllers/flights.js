const Flight = require('../models/flight')

module.exports = {
    index,
}

async function index(req, res){
    try{
        const flights = await Flight.find({});
        res.render('flights/index', {
            flight: flights,
            title: 'Flights'
        })
    } catch (err){
        console.log(err);
        res.render('flights/index', {errorMsg: err.errorMsg})
    }
}