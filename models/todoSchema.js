const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "user"

    },
    todoTitle: {
        type: String,
        required: true
    },
    todoDescription: {
        type: String,
        required: true
    },
    todoDate: {
        type:Date,
         default: Date.now
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;