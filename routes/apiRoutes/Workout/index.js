const router = require('express').Router();
const db = require('../../../models');

router.get("/", function (req, res) {
    db.Workout.find({})
        .then(function (data) {
            console.log(data)
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        });
});

router.put("/:id", function (req, res) {

    // db.Workout.findById(req.params.id)
    //     .then(function(workout){
    //         db.workout.findByIdAndUpdate(req.params.id, {
    //             totalDuration: workout.totalDuration + req.body.duration,
    //             $push: {
    //                 exercises: req.body
    //             }
    //         })
    //     })

    db.Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            }
        }, {
            new: true
        })
        .then(function (data) {
            console.log("new exercise---------------------", data)
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        });
});

router.post("/", function (req, res) {
    db.Workout.create({})
        .then(function (data) {
            console.log("new workout...................", data)
            res.json(data)
        })
        .catch(function (err) {
            console.log(err)
        });
});

router.get("/range", function (req, res) {
    db.Workout.find({})
        .then(function (data) {
            res.json(data)
            console.log("gtting range...................", data)
        })
        .catch(function (err) {
            console.log(err)
        })
});

module.exports = router;