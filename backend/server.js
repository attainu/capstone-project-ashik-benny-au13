const app = require('./app');
const connectDatabase = require('./config/dataBase');

const PORT = process.env.PORT || 7777


// DATABASE CONNECTION
connectDatabase()


const server =  app.listen(PORT, () => {
    console.log(`SERVER START LISTENING ON PORT: ${PORT}`)
})


