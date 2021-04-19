const router = require("express").Router();
const {Workout} = require("../models");

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", ({ body, params }, res) => {
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

router.get("/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("/workouts/range", (req, res) =>{
    Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;