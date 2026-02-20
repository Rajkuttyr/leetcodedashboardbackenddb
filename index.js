const express = require('express');
const app = express();
const port = 8080;
const userRoutes = require('./Routes/userroutes');
const primeRoutes = require("./Routes/prime")
const mongoose = require("mongoose")
app.use(express.json());
const cors = require('cors');
app.use(cors());
// Use user routes
app.use('/api', userRoutes);
app.use("/prime",primeRoutes)

// Middleware to parse JSON bodies

mongoose.connect("mongodb+srv://leetcodesrm_db_user:CudAmjLtwNJoatjq@cluster0.mnrf6wc.mongodb.net/SRMLeetcode")
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Sample route

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://190.168.1.136:${port}`);
  // http://190.168.1.136:8080
}); 