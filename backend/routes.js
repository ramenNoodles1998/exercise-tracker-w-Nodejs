const exerciseRouter = require('./routes/exercises')
const workoutRouter = require('./routes/workout')

exports.registerRoutes = (app) => {
    app.use('/exercises', exerciseRouter)
    app.use('/workouts', workoutRouter)
}