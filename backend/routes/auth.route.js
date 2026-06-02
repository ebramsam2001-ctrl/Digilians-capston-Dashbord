// requires (express, controler, middleware)
const express = require("express");
const loginController = require("../controllers/authAdmin.controller");

// router
const router = express.Router();

// init methode request
router.post("/login", loginController);

// express
module.exports = router;
