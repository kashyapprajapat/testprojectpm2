const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// GET endpoint to fetch users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// POST endpoint to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  res.status(201).json(newUser);
});

// PUT endpoint to update a user
app.put('/users/:id', (req, res) => {
  const updatedUser = req.body;
  updatedUser.id = parseInt(req.params.id);
  res.json(updatedUser);
});

// DELETE endpoint to delete a user
app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
