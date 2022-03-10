const express = require('express');
const router = express.Router();
const category = require("../controllers/category");
const { authenToken } = require("../middleware/authorization");

router.get("/", authenToken ,category.get_All);
// Retrieve all published category
// router.get("/published", category.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/:id", category.get_Detail);
// Update a Tutorial with id
router.put("/:id", category.update);
// Delete a Tutorial with id
router.delete("/:id", category.delete);
// Delete all category
// router.delete("/", category.deleteAll);
// Create category
router.post("/", category.create);

module.exports = router;