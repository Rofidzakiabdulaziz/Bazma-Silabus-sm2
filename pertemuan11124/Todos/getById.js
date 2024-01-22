const {getById , todoQuestion} = require('./todos');


const todoId = async() => {
  const id = await todoQuestion("Masukkan id Todo : ");
    getById(id)
}

todoId()