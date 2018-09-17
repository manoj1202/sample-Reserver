module.exports =(app) => {
    const reservations = require("../controllers/note-controller")
    app.get("/reservations", reservations.findAll);

    app.post("/reservation", reservations.create);

    app.get("/resaervations/:reservationid", reservations.findOne);

    app.put("/resaervations/:reservationid", reservations.updatet);

    app.delete("/resaervations/:reservationid", reservations.delete)
}

