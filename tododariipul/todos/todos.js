const fs = require('fs');
const readline = require('readline');
const { generateRandomId } = require('./generateRandomId');
const { resolve } = require('path');
const { rejects } = require('assert');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const directory = './dataBase/todos.json';
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
};

const checkFile = './dataBase/todos.json';
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
};

const todoQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const todos = () => {
    const fileTodos = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);

    rl.addListener.close();
};

// Menambahkan data baru
const storeTodo = (title, description, status) => {
    const id = generateRandomId(10);
    const todo = { id, title, description, status };
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file);
    dataTodos.push(todo);
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
    console.log('Tankyou for submit todos');

    rl.close();
};

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id);

    if (findTodoId) {
        console.log(findTodoId);
    } else {
        console.log(`Todo dengan ID ${findTodoId} tidak ditemukan.`);
    }
    
    rl.close();
};

const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        dataTodos[index] = { ...dataTodos[index], ...updateTodo };
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos));
        console.log(`Successfully update todo: ${id}`)
    } else {
        console.log(`Todo dengan id ${id} tidak ditemukan`);
    }

    rl.close();
}

const deleteById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const filterTodoId = dataTodos.filter(todo => todo.id !== id);

    if (filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
        console.log(`Successfully delete todo : ${id}`);
    } else {
        console.log(`Todo dengan id ${id} tidak ditemukan`);
    }
    rl.close();
}

module.exports = {
    todoQuestion,
    todos,
    storeTodo,
    getById,
    updateById,
    deleteById
};