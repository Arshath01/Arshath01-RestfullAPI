const makeConnection = require('./mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // Use the provided port or default to 5000

app.use(express.json());
app.use(cors());

let dbClient; // Store the MongoDB client globally

// Add the connection to MongoDB before starting the server
(async () => {
  try {
    dbClient = await makeConnection(); // Modify this function to use environment variables for MongoDB connection details
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
})();

app.post('/api/data', async (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
  res.status(200).json({ message: 'Message from server', name: name, password: password });
});

// app.get('/api/data', (req, res) => {
//   res.status(200).json({ message: 'Message'});
// });

app.get('/api/db', (req, res) => {
  if (dbClient) {
    res.status(200).json({ message: 'MongoDB client available'});
  } else {
    res.status(500).json({ message: 'MongoDB client not available' });
  }
});
