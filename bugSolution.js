const express = require('express');
const app = express();
app.use(express.json());

app.post('/data', (req, res) => {
  // Check if req.body is defined
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }

  // Check for missing parameters
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  console.log(req.body); // further processing
  res.json({ message: 'Data received successfully' });
});
