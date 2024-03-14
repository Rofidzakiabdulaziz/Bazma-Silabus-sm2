const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./db/connection");
const response = require("./helpers/response");
const TodoRoute = require("./router/TodoRoute");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/todos", TodoRoute);
app.use("/api/todos/:id", TodoRoute);

// // POST MENAMBVAKAN DATA BARU todo

// // // {put mengubah data berdasarkan id = localhost : 6000 }
// app.put('/api/todo/:id' , (req,res) => {
//     const {title,description} = req.body;
//     const id = req.params.id;
//     database.query('UPDATE todo SET title = ?,description =? WHERE id = ?',[title,description,id],(err,result) => {
//         if(err){
//             throw err;
//         }else {
//             if(result.length === 0){
//                 response(res,200,{message : `Todo not found ${id}`})
//             }else {
//                 res.json({
//                     message : 'Success updated todo'
//                 },201)
//             }
//         }
//     })
// })

// // // delete
//  app.delete('/api/todo/:id',(req,res) => {
//     const id = req.params.id;
//     database.query('DELETE from todo WHERE id = ?',[id],(err,result) => {
//             if(err){
//                 throw err;
//             }else {
//                 if(result.length === 0){
//                     res.json({
//                         message : `Todo ${id} not found `
//                     },404)
//                 } else {
//                     res.json({
//                         message : 'todo delected succesfully'
//                     },200)
//                 }
//             }
//     })
// })

// // show berdasarkan id
// app.get('/api/todo/:id',(req,res) => {
// const  id  = req.params.id;
// database.query('SELECT * from todo WHERE id = ?',[id],(err,result) => {
//         if(err){
//             throw err;
//         }else {
//             if(result.length === 0){
//                 res.json({
//                     message : `Todo ${id} not found `
//                 },404)
//             } else {
//                 res.json({
//                     message : `success get todo ${id}`,
//                     data : result[0]
//                 },200)
//             }
//         }
// })
// })
