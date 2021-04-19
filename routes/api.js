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

router.get("/workouts", async function (req, res) {
    try {
      const data = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });


router.get("/workouts/range", async function (req, res) {
try {
      const data = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]).sort({day:-1}).limit(7)
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
})

module.exports = router;