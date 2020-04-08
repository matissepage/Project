const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

const calendarSchema = mongoose.Schema({
    start: { type: Date, default: Date.now },
    end: { type: Date, default: Date.now},
    idUser: { type: String },
    title: { type: String, require, unique: true }
})

calendarSchema.plugin(validator)

module.exports = mongoose.model('Calendar', calendarSchema)
