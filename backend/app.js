const express = require('express');
const app = express ();

const cookieParser = require('cookie-parser')
const bodyparser = require('body-parser');
const fileUpload = require('express-fileupload')

const errorHandleMiddleware = require('./middlewares/errors');

app.use(express.json());
app.use(bodyparser.urlencoded({ extended:true}));
app.use(cookieParser());
app.use(fileUpload());


//IMPORT ALL ROUTES
const products = require('./routes/product');
const user = require('./routes/user');
const order = require('./routes/order');
const payment = require('./routes/payment');

//BASIC ROUTES
app.use('/api/v1',products);
app.use('/api/v1',user);
app.use('/api/v1',order);
app.use('/api/v1',payment);

// ERROR HANDLING MIDDLEWARE
app.use(errorHandleMiddleware);



module.exports = app;