let express = require("express");
let router = express.Router();
let TodoController = require('../controllers/TodoController');

router.route('/')
    .get(TodoController.listTodo)
    .post(TodoController.addTodo)
    .put(TodoController.updateTodo)
    .delete(TodoController.delTodo);


module.exports = router;
