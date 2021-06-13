

const sendJwtToken = (user,statuscode,res) => {

    // creating JWT
    const jwtToken = user.createJwtToken();

    // cookie
    const options = {
        expires : new Date( Date.now() + 7 *24 * 60 * 60 * 1000),
        httpOnly : true                                                 
    };

    res.status(statuscode).cookie('token', jwtToken, options).json({
        sucess : true,
        jwtToken,
        user
    });

};


module.exports = sendJwtToken