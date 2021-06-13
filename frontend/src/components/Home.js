import React from 'react'

const Home = () => {
    return (
    <div className="container container-fluid">
        <h1 id ="product_heading">Latest Products</h1>
        <section id="products" className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                    <div className="card p-3 rounded">
                        <img className="card-img-top mx-auto"
                            src="https://images-na.ssl-images-amazon.com/images/I/81NoPCOJh%2BL._SL1500_.jpg"/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <a href ="">128 memory card scan disk Ultra </a>
                        </h5>
                    <div className="rating mt-auto">
                        <div className="rating-outer">
                            <div classNmae="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">(5 reviews)</span>
                    </div>
                    <p className="card-text">Rs 500</p>
                    <a href="#" id="view_btn" className="btn btn-block">View Details</a>
                </div>
                </div>
            </div>
        </div>
        </section>
    </div>
    )
}
export default Home