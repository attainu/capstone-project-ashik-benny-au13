const Product = require('../models/product');
const errorHandler = require('../utils/errorHandler');
const apiFeatures = require('../utils/apiFeatures');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');



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

exports.getProducts = async (req,res,next) => {

    const productsPerPage = 3;
    
    const productsCount = await Product.countDocuments();

    const features = new apiFeatures(Product.find(), req.query)
        .search()                                                   // for keyword search
        .filter()                                                   // filter by category/price/ratings etc..
        .pagination(productsPerPage)                                // to decide howmany products need to dsipaly & skip

    const products = await features.query;

    res.status(200).json ({
        sucess : true,
        productsCount,
        count : products.length,
        products       
    })
};


// GETTING A SINGLE PRODUCT

exports.getSingleProduct = async (req,res,next) => {
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

exports.updateProduct = async (req,res,next) => {
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

exports.deleteProduct = async (req,res,next) => {
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



// CREATE/UPDATE PRODUCT REVIEW


exports.createProductReview = catchAsyncErrors(async (req,res,next) => {
    const { rating,comment,productId } = req.body;

    const review = {
        user : req.user._id,
        name : req.body.name,
        comment,
        rating : Number(rating)        
    };

    const product = await Product.findById(productId)

    // checks whether the same user allready give review to the same product

    const isUserReviewsProduct = product.reviews.find (
        cmt => cmt.user.toString() === req.user._id.toString()
    );

    if(isUserReviewsProduct) {
        
        // update review
        product.reviews.forEach(review => {
            if(review.user.toString() === req.user._id.toString()) {
                review.comment = comment;
                review.rating = rating
            };
        });

    }else{

        // create review
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    };

    // calculate the average rating of the product
    product.ratings = product.reviews.reduce((accumulator,item) => 
        item.rating + accumulator,0 ) /product.numOfReviews ;

    await product.save({ validateBeforeSave: false});

    res.status(200).json({
    sucess: true,
    message : 'Your review has added/updated successfully.'
    });

});



// GET ALL REVIEWS OF A SINGLE PRODUCT


exports.getProductReviews = catchAsyncErrors(async (req,res,next) => {
    const product = await Product.findById(req.query.id)
    
    res.status(200).json({
        sucess : true,
        reviews: product.reviews
    });
});



// DELETE A REVIEW OF A PRODUCT


exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    // avoid the review to be deleted and updates the new reviews array
    const reviews = product.reviews.filter(review => review._id.toString() !== req.query.id.toString());

    const numOfReviews = reviews.length;

    const ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length

    //update product
    await Product.findByIdAndUpdate(req.query.productId, { reviews, ratings, numOfReviews}, 
    {
    useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message : 'Product Review Deleted successfully'
    });
});
