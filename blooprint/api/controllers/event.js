const Calendar = require('../models/calendar')

let recupEvent = (req, res, next) => {
    // Calendar.findOne({ idUser: req.body.id })
    // .then(() => res.status(201).json({  }))
}

let createEvent = (req, res, next) => {
    const event = new Calendar({
        start: new Date(),
        title: req.body.title,
        end: new Date(),
        idUser: req.body.id
    })
    event.save()
    .then(() => res.status(201).json({ message: 'Event create' }))
    .catch(error => res.status(400).json({ error }))
}

module.exports = {
    recupEvent,
    createEvent
}