import mongoose, { Schema, model } from "mongoose";
const Task = new Schema({
    name: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
});
export default model('Task', Task);
