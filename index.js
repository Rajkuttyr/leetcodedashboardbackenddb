const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./Routes/userroutes');
const mongoose = require("mongoose")
app.use(express.json());
const cors = require('cors');
app.use(cors());
// Use user routes
app.use('/api', userRoutes);

// Middleware to parse JSON bodies

mongoose.connect("mongodb://localhost:27017/SRMLeetcode")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Sample route

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 