const express = require('express');
const app = express();

app.use(express.json());

const todos = [];

app.post('/agrega_todo', (req, res) => {
  const { todo } = req.body;

  if (!todo) {
    return res.status(400).json({ error: 'El todo no puede estar vacío' });
  }

  todos.push(todo);
  console.log('Todo recibido:', todo);

  res.status(201).json({ mensaje: 'Todo guardado exitosamente', todo });
});

// ✅ Endpoint para ver todas las tareas
app.get('/todos', (req, res) => {
  res.status(200).json({ tareas: todos });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
