const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/user");

//perform CRUD operation
router.get("/users/all",getAllUsers)


module.exports = router;