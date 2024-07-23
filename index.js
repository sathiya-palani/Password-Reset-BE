
const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');
const userRouter = require('./routes/userRoutes');
// const dotenv = require('dotenv');
const cors = require('cors');



// 2. create express app
const app = express();



// 5. middleware
app.use(express.json());

// for cors
app.use(cors());

app.use('/users',userRouter);


app.get("/", (req, res) => {
    res.send("Welcome to the Server!");
  });
  

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // after connecting to MongoDB, start the server
        app.listen(3001, () => {
            console.log(`Server is running on http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });

    