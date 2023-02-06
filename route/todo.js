const express = require("express");
const router = express.Router();
const {createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById, deleteAllTodos} = require("../controllers/todo");

//route for todo
router.post("/todo/create", createTodo);
router.get("/todos/getall", getAllTodos)
router.get("/todo/:id", getTodoById)
router.put("/todo/update/:id", updateTodoById)
router.delete("/todo/delete/:id", deleteTodoById)
router.delete("/todos/delete-all-events", deleteAllTodos)




module.exports = router;