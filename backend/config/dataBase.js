
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' })

const connectMongoose = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true
    }).then(res => {
        // console.log(`Connected to MongoDB Database : ${con.connection.host}`);
        console.log(`MongoDB Database connected with HOST: ${res.connection.host}`)
    })
};

module.exports = connectMongoose;