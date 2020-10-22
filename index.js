// importando o express
const express = require ('express');
const app = express();

const toDos = [
  
];

app.use(express.json());

function requisitionCount(req,res,next) {
  console.count("Requisições Realizadas");

  return next()
}

function checkToDoExists(req,res,next) {
  const {id} = req.params;
  const toDo = toDos.find(t => t.id == id);
  if (!toDo) {
    return res.status(400).json({
      error: `Todo of id=${id} does not exists`
    })
  }
  return next();
};

app
.get('/todos', requisitionCount, (req,res) =>{
  return res.json(toDos);
})

.post('/todos', requisitionCount, (req,res) => {
  const {id, title} = req.body;
  
  const toDo = {
    id,
    title,
    task: []
  };

  toDos.push(toDo);

  return res.status(201).json(toDo);
})

.post('/todos/:id/tasks', requisitionCount, checkToDoExists, (req,res) => {
  const { id } = req.params;
  const { title } = req.body;

  const toDo = toDos.find(t => t.id = id);
  toDo.task.push(title);

  return res.status(201).json(toDo);
})

.put('/todos/:id', requisitionCount, checkToDoExists, (req,res) => {
  const { id } = req.params;
  const { title } = req.body;

  const toDo = toDos.find(t => t.id = id);

  toDo.title = title;

  return res.json(toDo);
})

.delete('/todos/:id', requisitionCount, checkToDoExists, (req,res) => {
  const { id } = req.params;

  const toDoIndex = toDos.findIndex(t => t.id == id);
  
  toDos.splice(toDoIndex,1);

  return res.json(toDos);
})


.listen(3000);