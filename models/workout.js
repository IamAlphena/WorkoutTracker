const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a Exercise Type"
            },
            name: {
                type: String,
                required
            },
            duration:{
                required
            },
            weight: {

            },
            reps: {

            },
            sets:{

            },
            distance: {

            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
