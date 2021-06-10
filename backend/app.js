const express = require('express');
const app = express ();

const errorHandleMiddleware = require('./middlewares/error');

app.use(express.json());


//IMPORT ALL ROUTES
const products = require('./routes/product');
const user = require('./routes/user');

//BASIC ROUTES
app.use('/api/v1',products);
app.use('/api/v1',user);

// ERROR HANDLING MIDDLEWARE
app.use(errorHandleMiddleware);



module.exports = app;