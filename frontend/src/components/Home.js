import React, { Fragment, useState,useEffect } from "react";
import MetaData from "./layout/MetaData";
import Pagination from "react-js-pagination"

import { useDispatch, useSelector } from "react-redux";
import {useAlert} from 'react-alert';

import { getProducts } from "../actions/productActions";
import Product from "./products/Product";
import Loader from "../components/layout/Loader";

const Home = () => {


  const  [currentPage,setCurrentPage] = useState()
  const dispatch = useDispatch();
  const alert = useAlert();

  //loading from state
  const { loading, products, error, productsCount,resPerPage } = useSelector(
    (state) => state.product
  );

  useEffect(() => {

    if(error) {
      return alert.error(error);
    }

    dispatch(getProducts(currentPage));


  }, [dispatch,alert,error,currentPage])

  function setCurrentPageNo(pageNumber){
      setCurrentPage(pageNumber)
  }


  return (
    <Fragment>
      {loading ? (<Loader/>) : (
        <Fragment>
          <MetaData title={"Get the Best from"} />

          <h1 id="product_heading">Get the Best Offer !!</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))};
            </div>
          </section>
          {resPerPage <=productsCount &&(
               <div className="d-flex justify-content-center mt-5">
               <Pagination
                 activePage={currentPage}
                 itemCountPerPage={resPerPage}
                 totalItemsCount={productsCount}
                 onChange={setCurrentPageNo}
                 nextPageText={'Next'}
                 prePageText={'Prev'}
                 firstPageText={'First'}
                 lastPageText={'Last'}
                 itemClass="page-item"
                 linkClass="page-link"
                 />
             </div>




          )}  
         
        </Fragment> 
      )}
    </Fragment>
  );
};
export default Home;
