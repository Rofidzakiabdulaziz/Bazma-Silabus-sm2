const {deleteByid , todoQuestion} = require('./todos');

const deleteTodo = async () => {
  const id = await todoQuestion("Masukkan id todo : ");
  deleteByid(id)
}

deleteTodo()