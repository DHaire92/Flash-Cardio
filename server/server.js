const express = require('express');
const cors = require('cors');
const folderRoutes = require('./routes/folderRoutes')
const app = express();

// Allow requests from your frontend (e.g., http://localhost:3000)
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
}));

app.use(express.json());
app.use('/api/folders', folderRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:3000');
});
