
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    workout: {
        type: String,
        required: true,
        unique: true,
        trim: true
        
    },
},{
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout