const express = require('express');
const app = express();

// Permite recibir JSON en el body
app.use(express.json());

// Endpoint que tu app React Native llama
app.post('/agrega_todo', (req, res) => {
  const { todo } = req.body;

  // Validar que venga el todo
  if (!todo) {
    return res.status(400).json({ error: 'El todo no puede estar vacío' });
  }

  console.log('Todo recibido:', todo);

  // Responde con 201 que es lo que tu app espera
  res.status(201).json({ mensaje: 'Todo guardado exitosamente', todo });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
