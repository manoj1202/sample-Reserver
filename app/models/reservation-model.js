const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
    name :{
        type :String,
        required :true
    },
    hotelName: String,
    arrivalDate : Date,
    departureDate : Date
})

const Reservation = module.exports = mongoose.model("Reservation", ReservationSchema)

module.exports.getReservations = function(callback, limit){
    Reservation.find(callback).limit(limit)
}

module.exports.getReservationById = function(id, callback){
    Reservation.findById(id, callback)
}

module.exports.addReservation = function(reservation, callback){
    Reservation.create(reservation, callback)
}

module.exports.updateReservation = function(id, reservation, options, callback){
    const query = {_id: id}
    const update ={
        name : reservation.name,
        hotelName : reservation.hotelName,
        arrivalDate : reservation.arrivalDate,
        departureDate : reservation.departureDate
    }
    Reservation.findOneAndUpdate(query, update, options, callback)
}

module.exports.removeReservation = function(id, callback){
    const query= {_id : id}
    Reservation.remove(query, callback)
}