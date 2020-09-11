const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please select a type of exercise."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please select a name for the exercise."
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Please choose a duration."
                },
                weight: {
                    type: Number,
                    trim: true,
                },
                reps: {
                    type: Number,
                    trim: true,
                },
                sets: {
                    type: Number,
                    trim: true,
                },
                distance: {
                    type: Number,
                    trim: true,
                },
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        }
    });

exerciseSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;