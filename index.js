const express = require("express");
const bodyParser = require("body-parser")

require("dotenv").config({path:__dirname + "/.env"})
const mongoose = require("mongoose");
const router = require("./route/index");
const app = express();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("You have successfully connected to mongoDb"))
.catch(err => console.log("Could not connect to mongoDb...", err))

app.use(bodyParser.json());
router(app)

//localhost:4200/api/auth/user/create - to create user
app.listen(5100, ()=> {
    console.log("Your app is listening on port 5100");
})



//we dont neeed this anymore...
// app.use("/api/v1", router)
