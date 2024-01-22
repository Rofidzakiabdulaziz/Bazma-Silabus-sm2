const { getById, todoQuestion } = require('./todos');

const getTodoId = async () => {
    const todoId = await todoQuestion("Masukan ID todo : ");
    getById(todoId);
}

getTodoId();