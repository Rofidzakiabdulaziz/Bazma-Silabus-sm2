const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/todoControler");

router.get("/", TodoController.getAllTodo);
router.post("/", TodoController.StoreTodo);
router.put("/:id", TodoController.UpdateTodo);
router.delete("/:id", TodoController.DeleteTodo);

module.exports = router;
