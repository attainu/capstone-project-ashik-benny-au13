const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please Enter your name']
    },
    email : {
        type : String,
        required : [true, 'Please Enter your E-mail ID'] ,
        validator : [validator.isEmail, 'Enter your valid E-mail ID'],
        unique : true
    },
    password : {
        type : String,
        select : false,
        required : [true, 'Please Enter your password'] ,
        minlength : [5, 'Password needs a minimum charcter length of 4']
    },
    avatar : {
        public_id: {
            type:String,
            required : true
            },
        url: {
            type:String,
            required : true
            }
    },
    role : {
        type : String,
        default : 'user'
        },
    createdAt : {
        type : String,
        default : Date.Now
        },
    resetPasswordToken : String,
    resetPasswordExpire : Date
});


// Password encryption & salting before saving the userSchema
userSchema.pre('save', async function (next) {
    if(!this.isModified ('password')) next();
    this.password = await bcrypt.hash(this.password, 10)
});


// Creating jwt for user
userSchema.methods.getJwtToken = function() {
    return jwt.sign({ id:this._id }, 'ashben2021', {
        expiresIn : '3d'
    });
};


module.exports = mongoose.model('User', userSchema);