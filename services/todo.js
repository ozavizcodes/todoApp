const mongoose = require("mongoose");
const Todo = require("../models/todoSchema");

const createTodoServices = async(payload) => {
    try {

        const todo = new Todo({
            // todoId: payload.todoId,- using mongoose type of object id to replace the id;
            userId: mongoose.Types.ObjectId(payload.userId),
            todoTitle: payload.todoTitle,
            todoDescription: payload.todoDescription
        })
        return todo.save()
    } catch(err) {
        throw Error ("Error encountered while creating this todo")
    }
}

const getAllTodosServices = async()=> {
    try {
        const todos = await Todo.find({})
    
        return todos

    } catch(err) {
        throw Error ("Error encountered while getting all todos, try again later")
    }
}

//getTodoById
const getTodoByIdServices = async(id)=> {
    try {
        const todo = await Todo.findOne({_id:id})
        return todo

    } catch(err) {
        throw Error ("Cannot get todo by id at the moment, try again later")
    }

}
//updateTodoById services

const UpdateTodoByIdServices = async(id, payload)=> {
    try {
        const todo = await Todo.updateOne({_id:id}, {
            $set: {
                todoTitle: payload.todoTitle,
                todoDescription: payload.todoDescription
            }
        }
        )
        return todo 

    } catch(err) {

        throw Error ("This todo cannot be updated at the moment")
    }
}

const deleteTodoByIdServices = async(id)=> {
    try {
        const todo = await Todo.deleteOne({_id:id})
    
        return todo

    } catch(err) {
        throw Error("These todo cannot be deleted at the moment")
    }
}
//delet all Todo Services
const deleteAllTodosServices = async()=> {
    try {
      const todos = await Event.deleteMany({})
    
      return todos
  
    } catch(err) {
      throw Errror("All todos cannot be deleted at this time ")
    }
  }
  
module.exports = {createTodoServices, getAllTodosServices, 
    getTodoByIdServices, UpdateTodoByIdServices, deleteTodoByIdServices, deleteAllTodosServices}

