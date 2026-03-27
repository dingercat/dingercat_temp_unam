const express = require('express');
const app = express();

app.use(express.json());

// Arreglo donde se guardan las tareas en memoria
const todos = [];

// Endpoint para AGREGAR tarea
app.post('/agrega_todo', (req, res) => {
  const { todo } = req.body;

  if (!todo) {
    return res.status(400).json({ error: 'El todo no puede estar vacío' });
  }

  // Guarda la tarea en el arreglo
  todos.push(todo);
  console.log('Tareas guardadas:', todos);

  res.status(201).json({ mensaje: 'Todo guardado exitosamente', todo });
});

// ✅ Endpoint nuevo para VER todas las tareas
app.get('/todos', (req, res) => {
  res.status(200).json({ tareas: todos });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
```

---

## ¿Cómo ver las tareas?

### Opción 1: Desde el navegador
Entra a esta URL directamente:
```
https://animated-eureka-4j6jqwpxjp6hqg7r-3000.app.github.dev/todos
