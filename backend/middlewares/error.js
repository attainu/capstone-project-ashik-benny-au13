const ErrorHandler = require('../utils/errorHandler');

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    
    if(process.env.NODE_ENV == 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            sucess : false,
            error : err,
            errorMessage : err.message,
            stack : err.stack
        })
    };

    if(process.env.NODE_ENV == 'PRODUCTION') {
        let error = {...err}
        error.message = err.message

        // for invalid product id

        if(err.name == 'CastError') {                          
            const message = 'Invalid Product ID'
            error = new ErrorHandler(message,404)
        };

        // for validation of each schema parameters
        
        if(err.name == 'ValidationError') {                    
            const message = Object.values(err.errors).map(value => value.message)
            error = new ErrorHandler(message,400)
        };

        

        res.status(error.statusCode).json({
            sucess : false,
            message : error.message || 'Server Error Occurs Internally'
        })
    };
};

