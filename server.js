const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

Reservation = require("./app/models/reservation-model")

const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

mongoose.connect("mongodb://user1:test123@ds127362.mlab.com:27362/sample_db1", {
    useNewUrlParser : true
}). then(() => {
    console.log("connected to DataBase")
}).catch((err) =>{
    console.log("unable to connect to database")
})

app.get("/", (req, res) =>{
    res.send("<h1>Reservations</h1>")
})

app.get("/api/reservations", (req, res) =>{
    Reservation.getReservations(function(err, reservation){
        if(err){
            throw err;
        }
        res.json(reservation);
    })
})

app.get("/api/reservations/:_id", (req, res) => {
    Reservation.getReservationById(req.params._id, function (err, reservation) {
        if (err) {
            throw err;
        }
        res.json(reservation);
    })
})

app.post("/api/reservations", (req, res) =>{
    var reservation = req.body;;
    Reservation.addReservation(reservation, function(err, reservation){
        if(err){
            throw err
        }
        res.json(reservation)
    })
})

app.put("/api/reservations/:_id", (req, res) => {
    var id = req.params._id
    var reservation = req.body;;
    Reservation.updateReservation(id, reservation, {} ,function (err, reservation) {
        if (err) {
            throw err
        }
        res.json(reservation)
    })
})

app.delete("/api/reservations/:_id", (req, res) => {
    var id = req.params._id;
    
    Reservation.removeReservation(id ,  function (err, reservation) {
        if (err) {
            throw err
        }
        res.json(reservation)
    })
})


app.listen(port, ()=> {console.log("App started at port :",port)})