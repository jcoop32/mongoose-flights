const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
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

async function create(req, res){

    //deletes empty string to input default values
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }

    try{
        await Flight.create(req.body);
        res.redirect('/flights')

    } catch (err){
        console.log(err);
        res.render('flights/index', {errorMsg: err.errorMsg})
    }
}

function newFlight(req, res){
    res.render('flights/new', {errorMsg: '', title: 'Add Flight'})
}