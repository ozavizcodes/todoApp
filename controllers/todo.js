const { validator } = require("../helpers");

const { createTodoServices, getAllTodosServices,
getTodoByIdServices, 
UpdateTodoByIdServices,
deleteTodoByIdServices,
deleteAllTodosServices} = require("../services/todo");

//create Todo then validate the info using validatorjs
const createTodo = async(req, res, next) => {
    try {

        const rules = {
                todoTitle: 'required|string',
                todoDescription: 'required|string'       
        }

        await validator(req.body, rules, {}, async(error, status) => {
            if(status) {
                const result = await createTodoServices(req.body)
                res.status(200).send({message: "Todo has been created successfully", result})

            } else {
                res.status(412).send({message: "validation failed", success: status, data: error})
            }

        })

    } catch(err) {
        res.status(400).send({message: err.message})
    }
}
//get All Todos
const getAllTodos = async(req, res, next)=> {
    try {
        const result = await getAllTodosServices()
        
        res.status(200).send({message: "All todos gotten successfully", result})

    } catch(err) {
        res.status(412).send({message: err.message})
    }
}

const getTodoById = async(req, res, next )=> {
    try {
        const result = await getTodoByIdServices(req.params.id)
       
        res.status(200).send({message: "Id correct, todo has been fetched", result})

    } catch(err) {
        res.status(412).send({message: err.message})
    }
}
//updatetodo Controller
const updateTodoById = async(req, res, next) =>{
    try {
        const result = await UpdateTodoByIdServices(req.params.id, req.body)
        res.status(200).send({message: "This Todo has been successfully updated", result})

    } catch(err) {
        console.log(err);
        res.status(412).send({message: err.message})
        
    }
}
//deleteTodo Controller
const deleteTodoById = async(req, res, next)=> {
    try {
        const result = await deleteTodoByIdServices(req.params.id)
    
        res.status(200).send({message: "This todo has been sucessfully deleted", result})

    } catch(err) {
        res.status(412).send({message: err.message})
    }
}

//delete all todos
const deleteAllTodos = async(req, res, next)=> {
    try {
        const results = await deleteAllTodosServices()
        res.status(200).send({message: "All Todos have been deleted"})

    } catch(err) {
        res.status(412).send({message: err.message})
    }

}

module.exports = { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById, deleteAllTodos };