const database = require("../db/connection");
const response = require("../helpers/response");
const validation = require("../system/validation");

// membuat getTOdo = localhost/6000/api/todos

const getAllTodo = (req, res) => {
  const querySql = "SELECT * FROM todo";
  database.query(querySql, (err, result) => {
    if (err) throw err;
    response(res, 200, { message: "succes get todos", data: result });
  });
};

// store todo
const StoreTodo = async (req, res) => {
  const { title, description } = req.body;
  const isValidTitle = await validation(title);
  const isValidCaption = await validation(description);
  if (isValidTitle && isValidCaption) {
    database.query(
      "insert into todo (title,description) values (?,?)",
      [title, description],
      (err, result) => {
        if (err) throw err;
        response(res, 200, { message: "succes get todos" });
      }
    );
  } else if (!isValidCaption && !isValidTitle) {
    response(res, 400, { msg: "title and caption required" });
  } else {
    if (!isValidTitle) response(res, 400, { msg: "title required" });
    if (!isValidCaption) response(res, 400, { msg: "caption required" });
  }
};

// update todo
const UpdateTodo = async (req, res) => {
  const { title, description } = req.body;
  const isValidTitle = await validation(title);
  const isValidCaption = await validation(description);
  if (isValidTitle && isValidCaption) {
    const id = req.params.id;
    database.query(
      "UPDATE todo SET title = ?,description =? WHERE id = ?",
      [title, description, id],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          if (result.length === 0) {
            response(res, 200, { message: `Todo not found ${id}` });
          } else {
            res.json(
              {
                message: "Success updated todo",
              },
              201
            );
          }
        }
      }
    );
  } else if (!isValidCaption && !isValidTitle) {
    response(res, 400, { msg: "title and caption required" });
  } else {
    if (!isValidTitle) response(res, 400, { msg: "title required" });
    if (!isValidCaption) response(res, 400, { msg: "caption required" });
  }
};

// delete Todo
const DeleteTodo = (req, res) => {
  const id = req.params.id;
  database.query("DELETE from todo WHERE id = ?", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.length === 0) {
        res.json(
          {
            message: `Todo ${id} not found `,
          },
          404
        );
      } else {
        res.json(
          {
            message: "todo delected succesfully",
          },
          200
        );
      }
    }
  });
};

module.exports = { getAllTodo, StoreTodo, UpdateTodo, DeleteTodo };
