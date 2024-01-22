const generateRandomid = require("./generateRandomid");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directory = "./database";
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
};

const cekFile = "./database/todo.json";
if (!fs.existsSync(cekFile)) {
  fs.writeFileSync(cekFile, "[]", "utf-8");
};

const todoQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const todos = () => {
  const filetodos = fs.readFileSync(cekFile, "utf-8");
  const data = JSON.parse(filetodos);
  console.log(data);
  rl.close();
  // menambah data baru
};
const storeTodo = (title, description, status) => {
    const id = generateRandomid(10);
    const dataobjek = { id, title, description, status };
    const file = fs.readFileSync(cekFile, "utf-8");
    const dataTodos = JSON.parse(file);
    dataTodos.push(dataobjek);
    fs.writeFileSync(cekFile, JSON.stringify(dataTodos));
    console.log("selamat");

  rl.close();
};

const getById = (id) => {
   const file = fs.readFileSync(cekFile , 'utf-8');
   const data = JSON.parse(file);
   const findTodoid = data.find(todo => todo.id === id) 

   if(findTodoid) {
    console.log(findTodoid)
   }else {
    console.log(`Todo dengan id ini ${findTodoid} tidak terdeteksi`)
   }
   rl.close();
};

const updatebyId = (id , updateTodo) => {

  const file = fs.readFileSync(cekFile , 'utf-8');
  const data = JSON.parse(file);
  const index = data.findIndex(todo => todo.id === id) ;

   if(index !== -1 ){
      
   }






























   
}

module.exports = {
  todoQuestion,
  todos,
  storeTodo , 
  getById
};
