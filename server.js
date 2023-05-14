const makeConnection = require('./mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; // Use the provided port or default to 5000

app.use(express.json());
app.use(cors());

// Add the connection to MongoDB before starting the server
const db_data = (async () => {
  try {
    const clientPromise = await makeConnection(); // Modify this function to use environment variables for MongoDB connection details
    console.log(clientPromise)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    return clientPromise;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
})();

app.post('/api/data', async (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
  res.status(200).json({ message: 'Message from server', name: name, password: password,db:db_data });
});

app.get('/api/data', (req, res) => {
  res.status(200).json({ message: db_data });
});
