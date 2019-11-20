const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    workout:{type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    date:{type: Date, required: true},

},{
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise