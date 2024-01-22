const { deleteById, todoQuestion } = require('./todos');

const deleteTodo = async () => {
    const id = await todoQuestion("Masukan id todo : ");
    deleteById(id);
};

deleteTodo();