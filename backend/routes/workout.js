const router = require('express').Router()
let Workout = require('../models/workout.model')

router.route('/').get((req,res)=>{
    Workout.find()
    .then(workout=> res.json(workout))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res)=>{
    const workout = req.body.workout
    const newWorkout = new Workout({workout})

    newWorkout.save()
    .then(()=> res.json('Workout added!'))
    .catch(err=> res.status(400).json('Error: '+err))
})

module.exports = router
