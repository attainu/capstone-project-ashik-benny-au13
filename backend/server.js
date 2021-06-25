const app = require('./app');
const cloudinary = require('cloudinary');
const connectDatabase = require('./config/dataBase');

// configure .env
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({path : './config/config.env' })

const PORT = process.env.PORT 
const NODE_ENV = process.env.NODE_ENV

// DATABASE CONNECTION
connectDatabase()


//CLOUDINARY SETUP (need to add to .env later)
cloudinary.config({
    cloud_name: 'dy0tqwsxl',
    api_key: '369279267149985',
    api_secret: 'JJQiKM1rVKT_NpIEsvlrkNBp5lM'
});



const server = app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT} in ${NODE_ENV} mode.`)
})