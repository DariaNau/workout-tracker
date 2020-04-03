const router = require('express').Router()
const workoutRoutes = require('./Workout');

router.use("/workouts", workoutRoutes)

module.exports = router;