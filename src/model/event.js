import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
