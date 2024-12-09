import { Schema, model } from "mongoose";
const Task = new Schema({
    name: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: String,
    },
});
export default model('Task', Task);
