const router = require("express").Router();
const Workout = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercises : body} },
    )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("/api/workouts/range", (req, res) =>{
    Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;