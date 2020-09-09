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
                name: {
                    type: String,
                    trim: true,
                    required: "Please insert name"
                },
                weight: {
                    type: Number
                },
                distance: {
                    type: Number
                },
                // add additional exercises
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        }
    });