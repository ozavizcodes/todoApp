const authRoute = require("./auth");
const todoRoute = require ("./todo");
const userRoute = require("./user");

const router = (app) => {
   
    app.use('/api/auth', authRoute )
    app.use('/api/todo', todoRoute )
    app.use('/api/user', userRoute )

}


module.exports = router;