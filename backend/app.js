const express = require('express');
const app = express ();

const cookirParser = require('cookie-parser');

const errorHandleMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(cookirParser());


//IMPORT ALL ROUTES
const products = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');

//BASIC ROUTES
app.use('/api/v1',products);
app.use('/api/v1',user);
app.use('/api/v1',order);

// ERROR HANDLING MIDDLEWARE
app.use(errorHandleMiddleware);



module.exports = app;