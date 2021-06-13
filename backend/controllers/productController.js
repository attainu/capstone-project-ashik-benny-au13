const Product = require('../models/product');
const errorHandler = require('../utils/errorHandler');
const apiFeatures = require('../utils/apiFeatures');


//CREATING NEW PRODUCT

exports.newProduct = async (req,res,next) => {

    req.body.user = req.user.id;                        // getting the id of loggedin user

    const product = await Product.create(req.body)

    res.status(201).json({
        sucess : true,
        product        
    })
};


// GETTING ALL PRODUCTS

exports.getAllProducts = async (req,res,next) => {

    const features = new apiFeatures(Product.find(), req.query)
        .search()                                                       // for keyword search

    const products = await features.query

    res.status(200).json ({
        sucess : true,
        count : products.length,
        products       
    })
};


// GETTING A SINGLE PRODUCT

exports.getOneProduct = async (req,res,next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new errorHandler('Product Not Found', 404))
    }
    res.status(200).json ({
        sucess : true,
        product       
    })
};


// UPDATING A PRODUCT

exports.updateOneProduct = async (req,res,next) => {
    let product = await Product.findById(req.params.id)

    if(!product) {
        return next(new errorHandler('Product Not Found', 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true,
        useFindAndModify : false
    })
    res.status(200).json({
        sucess : true,
        product
    })
};


// DELETING A PRODUCT

exports.deleteOneProduct = async (req,res,next) => {
        let product = await Product.findById(req.params.id)

    if(!product) {
        return next(new errorHandler('Product Not Found', 404))
    }
    await product.remove();
    res.status(200).json({
        sucess : true,
        message : "Product Deleted Sucessfully"
    })
};