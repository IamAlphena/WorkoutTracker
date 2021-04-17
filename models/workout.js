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
                required: "Enter an Exercise Type"
            },
            name: {
                type: String,
                required: 'Enter an Exercise Name'
            },
            duration:{
                type: Number,
                required: "Enter how long the Exercise lasted"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets:{
                type: Number,
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
