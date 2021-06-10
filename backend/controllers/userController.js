const User = require('../models/user');
const errorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors.js')

// New user Registration

exports.registerNewUser = catchAsyncErrors( async(req,res,next) => {
    
    const { name,email,password } = req.body

    const user = await User.create ({
        name,email,password,
        avatar : {
            public_id : 'avatar/pexels-elle-hughes-1680172_blwcs8',
            url : 'https://res.cloudinary.com/dy0tqwsxl/image/upload/v1623304313/avatar/pexels-elle-hughes-1680172_blwcs8.jpg' 
            }
    })

    // calling jwt function
    const jwtToken = user.getJwtToken()

    res.status(201).json({
        sucess : true,
        jwtToken
    });
});