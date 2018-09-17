const Reservation = require("../models/reservation-model")

exports.create = (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message : "Reservation name can not be empty"
        })
    }

    const reservation = new Reservation ({
        name : req.body.name,
        hotelName : req.body.hotelName,
        arrivalDate: req.body.arrivalDate,
        departureDate : req.body.departureDate

    })

    reservation.save()
        .then(data => {
            res.esnd(data)
        }).catch(err =>{
            res.status(500).send({
                message: err.message ||"Some error occured"
            })
        })
};

exports.findAll = (req, res) =>{
    Reservation.find()
        .then(reservations =>{
            res.send(reservations)
        }).catch(err => {
            res.status(500).send({
                message : err.message || "Some error Occured"
            })
        })
};

exports.findOne = (req, res) => {
    Reservation.findById(req.params._id)
      .then(reservation =>{
          if(!reservation){
              return res.status(404).send({
                  message : "Reservation Not found with that Id"
              })
          }
          res.send(reservation)
      })
      .catch(err => {
          if(err.kind === "ObjectId"){
              res.status(404).send({
                  message: "Note not found with Id"
              })
          }
           return res.status(500).send({
               message : "Error retrieving note with id" + req.params._id
           })
          })
};

exports.update = (req, res) => {
    if(!req.body._id){
        return res.status(400).send({
            message : "Note Id cannot be found"
        })
    }
    Reservation.findByIdAndUpdate(req.params._id, {
        name : req.body.name,
        hotelName : req.body.hotelName,
        arrivalDate : req.body.arrivalDate,
        departureDate : req.body.departureDate
    }, {new : true})
     .then(reservation => {
         if(!reservation){
             res.status(404).send({
                 message : "Reservation not found"+ req.params._id
             })
         }
         res.send(reservation)
     }).catch(err => {
         if(err.kind === ObjectId){
             return res.status(500).send({
                 message : "NOte not found" + req.params.departureDate._id
             })
         }
     })
};

exports.delete = (req, res) => {
    Reservation.findByIdAndRemove(req.params._id)
      .then(reservation => {
          if(!reservation){
              res.status(404).send({
                  message: "Reservation not found"
              })
          }
          res.send({message : "Reservation Deleted"})
      }).catch(err =>{
          if(err.kind === "ObjectId" || err.name ==="NotFound"){
              return res.status(404).send({
                  message : "Reservation not found" + req.params._id
              })
          }
          return res.status(500).send({
              message : "Could Not delete reservation with Id"+ req.params._id
          })
      })
};