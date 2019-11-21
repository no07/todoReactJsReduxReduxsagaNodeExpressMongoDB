let Todo = require("../models/Todo");

function listTodo(req, res, next) {
    Todo.find({}, (err, totos) => {
        if (err)
            res.status(400).send(err);
        res.status(200).send(totos)
    })
}

function addTodo(req, res, next) {
    console.log(req.body.content);
    let todo = new Todo({
        content: req.body.content,
    });
    todo.save((err, todo) => {
        if (err)
            res.status(400).send(err);
        res.status(200).send(todo);
    });
}

function updateTodo(req, res, next) {
    Todo.findOneAndUpdate({_id: req.body._id}, {
        content: req.body.content,
        complete: req.body.complete? req.body.complete : false
    }, {new: true}, (err, todo) => {
        if (err)
            res.status(400).send(err);
        res.status(200).send(todo);
    })
}

function delTodo(req, res, next) {
    Todo.findByIdAndRemove({_id: req.body._id}, (err) => {
        if (err)
            res.status(400).send(err);
        res.status(200).send(
            {
                massage: "Success"
            }
        )
    })
}

module.exports = {
    listTodo: listTodo,
    addTodo: addTodo,
    updateTodo: updateTodo,
    delTodo: delTodo
};