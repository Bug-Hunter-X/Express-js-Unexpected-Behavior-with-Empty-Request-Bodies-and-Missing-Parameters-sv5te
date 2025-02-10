const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  // ... further processing ...
});

//Problem: The above code will work fine until you send a request with an empty body. When an empty body is received, req.body will be undefined leading to an error further down the line. 

//Another scenario:

app.post('/data', (req, res) => {
  const { name, age } = req.body; // This will throw an error if name or age are missing
});