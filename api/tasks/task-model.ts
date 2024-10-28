import { Schema, model } from "mongoose";

const Task = new Schema({
  name: {
    type: String,
  }
})

export default model('Task', Task);