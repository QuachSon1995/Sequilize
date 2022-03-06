const express = require('express');
const router = express.Router();
const User_controller = require("../controllers/account");

// Create a new Tutorial
router.post("/login", User_controller.login);
// Create a new Tutorial
router.post("/register", User_controller.register);
// Create a new Tutorial
// router.post("/", User_controller.add);
// Retrieve all User_controller
router.get("/", User_controller.findAll);
// Retrieve all published User_controller
router.get("/published", User_controller.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", User_controller.findOne);
// Update a Tutorial with id
router.put("/:id", User_controller.update);
// Delete a Tutorial with id
router.delete("/:id", User_controller.delete);
// Delete all User_controller
router.delete("/", User_controller.deleteAll);

module.exports = router;