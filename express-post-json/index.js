const express = require('express');
const app = express(); //Creates an Express app exported by the express module

let nextId = 1;
let grades = {};

app.use(express.json()); //app knows how to parse JSON request bodies

app.get('/api/grades', (req, res) => {
  let arr = [];
  for(let id in grades) {
    arr.push(grades[id]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body; //to access the parsed request body (JavaScript object containing the parse JSON)
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201); //sets HTTP status code
  res.json(grade); //sends response
});


app.listen(3000, () => {
  console.log('Listening on port 3000!')
}) //indicating that the server is binds/listening at port 3000
